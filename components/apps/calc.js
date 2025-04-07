import React, { Component } from 'react'
import $ from 'jquery';
const Parser = require('expr-eval').Parser;

const parser = new Parser({
    operators: {
      // These default to true, but are included to be explicit
      add: true,
      concatenate: true,
      conditional: true,
      divide: true,
      factorial: true,
      multiply: true,
      power: true,
      remainder: true,
      subtract: true,

      // Disable and, or, not, <, ==, !=, etc.
      logical: false,
      comparison: false,

      // Disable 'in' and = operators
      'in': false,
      assignment: true
    }
  });

export class Calc extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
            formula: '',
            evaluated: false,
            decimal: false,
            theme: 'dark' // dark or light theme
        };
    }

    componentDidMount() {
        // Add event listener for keyboard input
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        // Remove event listener when component unmounts
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        // Map keyboard keys to calculator buttons
        const key = e.key;
        
        if (/[0-9]/.test(key)) {
            this.handleNumber(key);
        } else if (key === '.') {
            this.handleDecimal();
        } else if (['+', '-', '*', '/'].includes(key)) {
            this.handleOperator(key);
        } else if (key === 'Enter' || key === '=') {
            this.handleEquals();
        } else if (key === 'Escape') {
            this.handleClear();
        } else if (key === 'Backspace') {
            this.handleDelete();
        }
    }

    handleNumber = (num) => {
        const { display, formula, evaluated } = this.state;
        
        if (evaluated) {
            this.setState({
                display: num,
                formula: num !== '0' ? num : '',
                evaluated: false
            });
        } else {
            this.setState({
                display: display === '0' ? num : display + num,
                formula: display === '0' && num === '0' ? formula : 
                         formula === '0' ? num : formula + num
            });
        }
    }

    handleOperator = (operator) => {
        const { display, formula, evaluated } = this.state;
        const lastChar = formula.slice(-1);
        
        this.setState({ decimal: false });
        
        if (evaluated) {
            this.setState({
                formula: display + operator,
                display: operator,
                evaluated: false
            });
        } else if (['+', '-', '*', '/'].includes(lastChar)) {
            // Replace the last operator if there's already one
            if (operator === '-' && lastChar !== '-') {
                // Allow negative numbers
                this.setState({
                    formula: formula + operator,
                    display: operator
                });
            } else {
                this.setState({
                    formula: formula.slice(0, -1) + operator,
                    display: operator
                });
            }
        } else {
            this.setState({
                formula: formula + operator,
                display: operator
            });
        }
    }

    handleDecimal = () => {
        const { display, formula, evaluated, decimal } = this.state;
        
        if (evaluated) {
            this.setState({
                display: '0.',
                formula: '0.',
                evaluated: false,
                decimal: true
            });
        } else if (!decimal) {
            this.setState({
                display: display.includes('.') ? display : display + '.',
                formula: formula === '' ? '0.' : 
                         /[+\-*/]$/.test(formula) ? formula + '0.' : formula + '.',
                decimal: true
            });
        }
    }

    handleEquals = () => {
        const { formula } = this.state;
        
        if (formula) {
            try {
                // Clean up the formula to ensure it's valid
                let cleanFormula = formula;
                // Replace multiple operators with the last one
                cleanFormula = cleanFormula.replace(/[+\-*/]{2,}/g, (match) => {
                    return match.slice(-1);
                });
                
                // Calculate the result
                // eslint-disable-next-line no-eval
                const result = eval(cleanFormula);
                const resultStr = parseFloat(result.toFixed(10)).toString();
                
                this.setState({
                    display: resultStr,
                    formula: formula + '=' + resultStr,
                    evaluated: true,
                    decimal: resultStr.includes('.')
                });
            } catch (e) {
                this.setState({
                    display: 'Error',
                    formula: 'Error',
                    evaluated: true,
                    decimal: false
                });
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.handleClear();
                }, 2000);
            }
        }
    }

    handleClear = () => {
        this.setState({
            display: '0',
            formula: '',
            evaluated: false,
            decimal: false
        });
    }

    handleDelete = () => {
        const { display, formula, evaluated } = this.state;
        
        if (!evaluated && formula.length > 0) {
            const newFormula = formula.slice(0, -1);
            const lastOperatorIndex = Math.max(
                newFormula.lastIndexOf('+'),
                newFormula.lastIndexOf('-'),
                newFormula.lastIndexOf('*'),
                newFormula.lastIndexOf('/')
            );
            
            this.setState({
                formula: newFormula,
                display: newFormula.length === 0 ? '0' : 
                         lastOperatorIndex === -1 ? newFormula : 
                         newFormula.slice(lastOperatorIndex + 1) || newFormula.slice(lastOperatorIndex),
                decimal: newFormula.slice(lastOperatorIndex + 1).includes('.')
            });
        }
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'dark' ? 'light' : 'dark'
        }));
    }

    closeCalculator = () => {
        $('#close-calc').trigger('click');
    }

    render() {
        const { display, formula, theme } = this.state;
        
        const themeClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
        const displayClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900';
        const buttonClass = theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-900';
        const operatorClass = theme === 'dark' ? 'bg-orange-500 hover:bg-orange-400 text-white' : 'bg-orange-400 hover:bg-orange-500 text-white';
        const equalClass = theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white';
        const clearClass = theme === 'dark' ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-red-500 hover:bg-red-600 text-white';
        
        return (
            <div className={`h-full w-full ${themeClass} p-4 flex flex-col rounded-lg shadow-lg transition-colors duration-300`}>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-white">Calculator</div>
                    <div className="flex space-x-2">
                        <button 
                            onClick={this.toggleTheme}
                            className={`p-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-300 text-gray-700'}`}
                            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <button 
                            onClick={this.closeCalculator}
                            className="p-1 rounded-full bg-red-500 text-white"
                            title="Close calculator"
                        >
                            ✕
                        </button>
                    </div>
                </div>
                
                <div className={`${displayClass} p-4 rounded-lg mb-4 transition-colors duration-300`}>
                    <div className="text-xs opacity-70 h-6 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {formula}
                    </div>
                    <div className="text-right text-2xl font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {display}
                    </div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 flex-grow">
                    {/* First row */}
                    <button onClick={this.handleClear} className={`${clearClass} p-3 rounded-lg font-bold transition-colors duration-200`}>AC</button>
                    <button onClick={this.handleDelete} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>DEL</button>
                    <button onClick={() => this.handleOperator('%')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>%</button>
                    <button onClick={() => this.handleOperator('/')} className={`${operatorClass} p-3 rounded-lg font-bold transition-colors duration-200`}>÷</button>
                    
                    {/* Second row */}
                    <button onClick={() => this.handleNumber('7')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>7</button>
                    <button onClick={() => this.handleNumber('8')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>8</button>
                    <button onClick={() => this.handleNumber('9')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>9</button>
                    <button onClick={() => this.handleOperator('*')} className={`${operatorClass} p-3 rounded-lg font-bold transition-colors duration-200`}>×</button>
                    
                    {/* Third row */}
                    <button onClick={() => this.handleNumber('4')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>4</button>
                    <button onClick={() => this.handleNumber('5')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>5</button>
                    <button onClick={() => this.handleNumber('6')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>6</button>
                    <button onClick={() => this.handleOperator('-')} className={`${operatorClass} p-3 rounded-lg font-bold transition-colors duration-200`}>−</button>
                    
                    {/* Fourth row */}
                    <button onClick={() => this.handleNumber('1')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>1</button>
                    <button onClick={() => this.handleNumber('2')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>2</button>
                    <button onClick={() => this.handleNumber('3')} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>3</button>
                    <button onClick={() => this.handleOperator('+')} className={`${operatorClass} p-3 rounded-lg font-bold transition-colors duration-200`}>+</button>
                    
                    {/* Fifth row */}
                    <button onClick={() => this.handleNumber('0')} className={`${buttonClass} col-span-2 p-3 rounded-lg font-bold transition-colors duration-200`}>0</button>
                    <button onClick={this.handleDecimal} className={`${buttonClass} p-3 rounded-lg font-bold transition-colors duration-200`}>.</button>
                    <button onClick={this.handleEquals} className={`${equalClass} p-3 rounded-lg font-bold transition-colors duration-200`}>=</button>
                </div>
            </div>
        );
    }
}

export default Calc

export const displayTerminalCalc = (addFolder,openApp) => {
    return <Calc addFolder={addFolder} openApp={openApp}> </Calc>;
}