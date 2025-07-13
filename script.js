// Global variables
let timerInterval;
let timerSeconds = 0;
let isTimerRunning = false;
let activeTools = 0;

// Unit conversion data
const units = {
    length: {
        'mm': 1,
        'cm': 10,
        'm': 1000,
        'km': 1000000,
        'in': 25.4,
        'ft': 304.8,
        'yd': 914.4,
        'mi': 1609344
    },
    weight: {
        'mg': 1,
        'g': 1000,
        'kg': 1000000,
        'oz': 28349.5,
        'lb': 453592,
        'ton': 1000000000
    },
    temperature: {
        'celsius': (val, to) => {
            if (to === 'fahrenheit') return (val * 9/5) + 32;
            if (to === 'kelvin') return val + 273.15;
            return val;
        },
        'fahrenheit': (val, to) => {
            if (to === 'celsius') return (val - 32) * 5/9;
            if (to === 'kelvin') return (val - 32) * 5/9 + 273.15;
            return val;
        },
        'kelvin': (val, to) => {
            if (to === 'celsius') return val - 273.15;
            if (to === 'fahrenheit') return (val - 273.15) * 9/5 + 32;
            return val;
        }
    },
    area: {
        'mm²': 1,
        'cm²': 100,
        'm²': 1000000,
        'km²': 1000000000000,
        'in²': 645.16,
        'ft²': 92903.04,
        'yd²': 836127.36
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    updateActiveToolsCount();
    loadSavedNotes();
    setupKeyboardShortcuts();
    updateUnits();
    
    // Auto-save indicator
    setInterval(updateAutoSaveStatus, 3000);
});

// Date and time functions
function updateDateTime() {
    const now = new Date();
    const dateOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    
    document.getElementById('current-date').textContent = 
        now.toLocaleDateString('tr-TR', dateOptions);
    document.getElementById('current-time').textContent = 
        now.toLocaleTimeString('tr-TR', timeOptions);
}

// Tool management functions
function openTool(toolName) {
    const tool = document.getElementById(toolName);
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (tool) {
        tool.style.display = 'block';
        welcomeMessage.style.display = 'none';
        activeTools++;
        updateActiveToolsCount();
    }
}

function closeTool(toolName) {
    const tool = document.getElementById(toolName);
    
    if (tool) {
        tool.style.display = 'none';
        activeTools--;
        updateActiveToolsCount();
        
        // Show welcome message if no tools are open
        if (activeTools === 0) {
            document.getElementById('welcome-message').style.display = 'flex';
        }
    }
}

function updateActiveToolsCount() {
    document.getElementById('active-tools').textContent = activeTools;
}

// Tool opening functions
function openCalculator() {
    openTool('calculator');
}

function openConverter() {
    openTool('converter');
}

function openTimer() {
    openTool('timer');
}

function openNotes() {
    openTool('notes');
}

// Calculator functions
function appendToCalc(value) {
    const display = document.getElementById('calc-display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearCalc() {
    document.getElementById('calc-display').value = '';
}

function deleteLast() {
    const display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('calc-display');
    try {
        // Replace display symbols with JavaScript operators
        let expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        
        const result = eval(expression);
        display.value = result;
        
        // Update last calculation info
        document.getElementById('last-calculation').textContent = 
            `${expression} = ${result}`;
    } catch (error) {
        display.value = 'Error';
    }
}

// Unit converter functions
function updateUnits() {
    const unitType = document.getElementById('unit-type').value;
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    
    // Clear existing options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    // Add new options based on unit type
    if (unitType === 'temperature') {
        const tempUnits = ['celsius', 'fahrenheit', 'kelvin'];
        tempUnits.forEach(unit => {
            fromUnit.add(new Option(unit.charAt(0).toUpperCase() + unit.slice(1), unit));
            toUnit.add(new Option(unit.charAt(0).toUpperCase() + unit.slice(1), unit));
        });
    } else {
        const unitList = Object.keys(units[unitType]);
        unitList.forEach(unit => {
            fromUnit.add(new Option(unit, unit));
            toUnit.add(new Option(unit, unit));
        });
    }
    
    // Set default selections
    if (toUnit.options.length > 1) {
        toUnit.selectedIndex = 1;
    }
    
    convert();
}

function convert() {
    const unitType = document.getElementById('unit-type').value;
    const fromValue = parseFloat(document.getElementById('from-value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const toValueInput = document.getElementById('to-value');
    
    if (isNaN(fromValue)) {
        toValueInput.value = '';
        return;
    }
    
    let result;
    
    if (unitType === 'temperature') {
        result = units.temperature[fromUnit](fromValue, toUnit);
    } else {
        const baseValue = fromValue * units[unitType][fromUnit];
        result = baseValue / units[unitType][toUnit];
    }
    
    toValueInput.value = result.toFixed(6).replace(/\.?0+$/, '');
}

// Timer functions
function startTimer() {
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
    
    if (!isTimerRunning) {
        if (timerSeconds === 0) {
            timerSeconds = minutes * 60 + seconds;
        }
        
        if (timerSeconds > 0) {
            isTimerRunning = true;
            timerInterval = setInterval(updateTimer, 1000);
        }
    }
}

function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
    } else {
        pauseTimer();
        alert('Zaman doldu!');
    }
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    
    const display = document.getElementById('timer-display');
    display.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Notes functions
function saveNotes() {
    const notes = document.getElementById('notes-area').value;
    localStorage.setItem('technicalNotes', notes);
    
    // Show feedback
    const originalText = event.target.innerHTML;
    event.target.innerHTML = '<i class="fas fa-check"></i> Kaydedildi';
    setTimeout(() => {
        event.target.innerHTML = originalText;
    }, 2000);
}

function clearNotes() {
    if (confirm('Notları temizlemek istediğinizden emin misiniz?')) {
        document.getElementById('notes-area').value = '';
        localStorage.removeItem('technicalNotes');
    }
}

function loadSavedNotes() {
    const savedNotes = localStorage.getItem('technicalNotes');
    if (savedNotes) {
        document.getElementById('notes-area').value = savedNotes;
    }
}

// Workspace functions
function clearWorkspace() {
    if (confirm('Çalışma alanını temizlemek istediğinizden emin misiniz?')) {
        // Close all tools
        const tools = ['calculator', 'converter', 'timer', 'notes'];
        tools.forEach(tool => {
            const element = document.getElementById(tool);
            if (element && element.style.display !== 'none') {
                closeTool(tool);
            }
        });
        
        // Clear calculator
        clearCalc();
        
        // Reset timer
        resetTimer();
        
        // Clear converter inputs
        document.getElementById('from-value').value = '';
        document.getElementById('to-value').value = '';
        
        // Show welcome message
        document.getElementById('welcome-message').style.display = 'flex';
    }
}

function saveWork() {
    const workspaceData = {
        calculator: document.getElementById('calc-display').value,
        converterFrom: document.getElementById('from-value').value,
        converterTo: document.getElementById('to-value').value,
        notes: document.getElementById('notes-area').value,
        timerMinutes: document.getElementById('timer-minutes').value,
        timerSeconds: document.getElementById('timer-seconds').value,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('technicalWorkspace', JSON.stringify(workspaceData));
    
    // Show feedback
    const originalText = event.target.innerHTML;
    event.target.innerHTML = '<i class="fas fa-check"></i> Kaydedildi';
    setTimeout(() => {
        event.target.innerHTML = originalText;
    }, 2000);
}

// Auto-save status
function updateAutoSaveStatus() {
    const autoSaveStatus = document.getElementById('auto-save-status');
    autoSaveStatus.classList.add('active');
    
    // Auto-save notes if they exist
    const notes = document.getElementById('notes-area').value;
    if (notes.trim()) {
        localStorage.setItem('technicalNotes', notes);
    }
    
    setTimeout(() => {
        autoSaveStatus.classList.remove('active');
    }, 500);
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            switch(event.key.toLowerCase()) {
                case 'c':
                    event.preventDefault();
                    openCalculator();
                    break;
                case 'u':
                    event.preventDefault();
                    openConverter();
                    break;
                case 't':
                    event.preventDefault();
                    openTimer();
                    break;
                case 'n':
                    event.preventDefault();
                    openNotes();
                    break;
            }
        }
        
        // Calculator keyboard support
        if (document.getElementById('calculator').style.display !== 'none') {
            handleCalculatorKeyboard(event);
        }
    });
}

function handleCalculatorKeyboard(event) {
    const key = event.key;
    
    if ('0123456789'.includes(key)) {
        appendToCalc(key);
    } else if (key === '+') {
        appendToCalc('+');
    } else if (key === '-') {
        appendToCalc('-');
    } else if (key === '*') {
        appendToCalc('×');
    } else if (key === '/') {
        event.preventDefault();
        appendToCalc('÷');
    } else if (key === '.') {
        appendToCalc('.');
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        clearCalc();
    } else if (key === 'Backspace') {
        deleteLast();
    }
}

// Load saved workspace on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedWorkspace = localStorage.getItem('technicalWorkspace');
    if (savedWorkspace) {
        try {
            const data = JSON.parse(savedWorkspace);
            
            // Restore calculator
            if (data.calculator) {
                document.getElementById('calc-display').value = data.calculator;
            }
            
            // Restore converter
            if (data.converterFrom) {
                document.getElementById('from-value').value = data.converterFrom;
            }
            if (data.converterTo) {
                document.getElementById('to-value').value = data.converterTo;
            }
            
            // Restore timer inputs
            if (data.timerMinutes) {
                document.getElementById('timer-minutes').value = data.timerMinutes;
            }
            if (data.timerSeconds) {
                document.getElementById('timer-seconds').value = data.timerSeconds;
            }
        } catch (error) {
            console.error('Kaydedilmiş çalışma alanı yüklenirken hata:', error);
        }
    }
});

// Add some utility functions
function exportData() {
    const data = {
        notes: document.getElementById('notes-area').value,
        workspace: localStorage.getItem('technicalWorkspace'),
        timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `teknik-calisma-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.notes) {
                document.getElementById('notes-area').value = data.notes;
                saveNotes();
            }
            
            if (data.workspace) {
                localStorage.setItem('technicalWorkspace', data.workspace);
                location.reload();
            }
            
            alert('Veriler başarıyla içe aktarıldı!');
        } catch (error) {
            alert('Dosya formatı hatalı!');
        }
    };
    reader.readAsText(file);
}

// Add theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
