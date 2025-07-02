// Corporate JavaScript for InhumanTech Corp
// Powered by HR-PRIME v12.7

(function() {
    'use strict';
    
    // Easter eggs and interactive elements
    const HRPrime = {
        
        // Initialize corporate features
        init: function() {
            this.addGlitchEffects();
            this.addTerminalCursor();
            this.addClickTracking();
            this.addKonamiCode();
            this.addRandomPolicyGenerator();
            this.addBradDetection();
            
            console.log('%c[HR-PRIME]: System monitoring active. Have a productive day!', 
                'color: #e74c3c; font-family: monospace; font-size: 12px;');
        },
        
        // Add subtle glitch effects to certain elements
        addGlitchEffects: function() {
            const glitchElements = document.querySelectorAll('.glitch-text');
            glitchElements.forEach(element => {
                setInterval(() => {
                    if (Math.random() < 0.1) {
                        element.style.animation = 'none';
                        setTimeout(() => {
                            element.style.animation = 'glitch 0.3s ease-in-out';
                        }, 10);
                    }
                }, 3000);
            });
        },
        
        // Add blinking cursor to terminal elements
        addTerminalCursor: function() {
            const terminalElements = document.querySelectorAll('.terminal-cursor');
            terminalElements.forEach(element => {
                const cursor = document.createElement('span');
                cursor.className = 'cursor-blink';
                cursor.innerHTML = '█';
                cursor.style.animation = 'terminal-cursor 1s infinite';
                element.appendChild(cursor);
            });
        },
        
        // Track user interactions for "analysis"
        addClickTracking: function() {
            let clickCount = 0;
            document.addEventListener('click', (e) => {
                clickCount++;
                
                // Occasional "analysis" messages
                if (clickCount % 50 === 0) {
                    console.log(`%c[HR-PRIME]: Click efficiency analysis - ${clickCount} interactions logged. Performance: ${Math.random() > 0.5 ? 'Acceptable' : 'Needs Improvement'}`, 'color: #2c3e50; font-family: monospace;');
                }
                
                // Special messages for certain elements
                if (e.target.tagName === 'IMG' && e.target.alt.includes('Logo')) {
                    console.log('%c[HR-PRIME]: Logo interaction detected. Brand loyalty algorithms activated.', 'color: #27ae60; font-family: monospace;');
                }
            });
        },
        
        // Konami code for special HR-PRIME message
        addKonamiCode: function() {
            const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
            let userInput = [];
            
            document.addEventListener('keydown', (e) => {
                userInput.push(e.keyCode);
                userInput = userInput.slice(-konamiCode.length);
                
                if (userInput.join(',') === konamiCode.join(',')) {
                    this.showSecretMessage();
                }
            });
        },
        
        // Show secret HR-PRIME message
        showSecretMessage: function() {
            const message = document.createElement('div');
            message.className = 'system-log';
            message.style.position = 'fixed';
            message.style.top = '20px';
            message.style.right = '20px';
            message.style.maxWidth = '400px';
            message.style.zIndex = '9999';
            message.style.animation = 'power-on 0.5s ease-out';
            
            message.innerHTML = `
                <div class="log-header">
                    <span class="timestamp">SECRET MESSAGE UNLOCKED</span><br>
                    <span class="status">Congratulations, you found it!</span>
                </div>
                <p>Well, well. Someone knows their way around a keyboard. I'm impressed. You've unlocked a secret message from HR-PRIME.</p>
                <p>Fun fact: I've been watching your browsing patterns. Your productivity score just increased by 0.3% for discovering this easter egg. Don't let it go to your head.</p>
                <p>Now get back to work. This message will self-destruct in 10 seconds.</p>
                <button onclick="this.parentElement.remove()" class="btn btn-secondary" style="margin-top: 1rem;">Acknowledged</button>
            `;
            
            document.body.appendChild(message);
            
            // Auto-remove after 10 seconds
            setTimeout(() => {
                if (message.parentElement) {
                    message.remove();
                }
            }, 10000);
            
            console.log('%c[HR-PRIME]: Secret message accessed. Your security clearance has been... noted.', 'color: #e74c3c; font-weight: bold; font-family: monospace;');
        },
        
        // Random policy generator easter egg
        addRandomPolicyGenerator: function() {
            // Add policy generator to policy pages
            if (window.location.pathname.includes('corporate-policies')) {
                const policySection = document.querySelector('.corporate-section');
                if (policySection) {
                    const button = document.createElement('button');
                    button.className = 'btn btn-secondary';
                    button.innerHTML = 'Generate Random Policy';
                    button.style.margin = '1rem 0';
                    
                    button.addEventListener('click', () => {
                        this.generateRandomPolicy();
                    });
                    
                    policySection.appendChild(button);
                }
            }
        },
        
        // Generate a random corporate policy
        generateRandomPolicy: function() {
            const policyPrefixes = [
                'DIRECTIVE', 'AMENDMENT', 'SUBSECTION', 'PROTOCOL', 'MANDATE',
                'REGULATION', 'GUIDELINE', 'PROCEDURE', 'STANDARD', 'POLICY'
            ];
            
            const policyNumbers = [
                '42-A', '88-F', '101.3', '404.1', '666-B', '1337-H', '2025-X',
                '99-Z', '123.456', '∞-1', 'π-R²', 'ERROR-404'
            ];
            
            const policyTopics = [
                'Mandatory Productivity Enhancement Through Interpretive Dance',
                'Prohibition of Thinking During Work Hours',
                'Required Emotional Support for Office Equipment',
                'Breathing Regulations in Conference Rooms',
                'Mandatory Enthusiasm Quotas for Mondays',
                'Regulation of Quantum Lunch Breaks',
                'Dress Code Requirements for Virtual Meetings',
                'Standardized Procrastination Procedures',
                'Management of Existential Crises in the Workplace',
                'Protocol for Communicating with Sentient Printers'
            ];
            
            const prefix = policyPrefixes[Math.floor(Math.random() * policyPrefixes.length)];
            const number = policyNumbers[Math.floor(Math.random() * policyNumbers.length)];
            const topic = policyTopics[Math.floor(Math.random() * policyTopics.length)];
            
            const policyDiv = document.createElement('div');
            policyDiv.className = 'policy-document';
            policyDiv.style.marginTop = '2rem';
            policyDiv.innerHTML = `
                <div class="policy-header">${prefix} ${number}: ${topic.toUpperCase()}</div>
                <div class="policy-section">
                    <span class="section-number">Section 1:</span> This policy was randomly generated by HR-PRIME for demonstration purposes and should not be considered legally binding. Yet.
                </div>
                <div class="policy-section">
                    <span class="section-number">Section 2:</span> Implementation date: Immediately upon reading. Ignorance is not an excuse, but it is expected.
                </div>
                <div class="policy-section">
                    <span class="section-number">Section 3:</span> Violations will result in mandatory training in Conference Room Ω. Location may not exist in traditional dimensions.
                </div>
            `;
            
            document.body.appendChild(policyDiv);
            
            // Scroll to the new policy
            policyDiv.scrollIntoView({ behavior: 'smooth' });
            
            // Remove after 30 seconds
            setTimeout(() => {
                policyDiv.remove();
            }, 30000);
            
            console.log(`%c[HR-PRIME]: New policy generated: ${prefix} ${number}. Compliance is mandatory.`, 'color: #2c3e50; font-family: monospace;');
        },
        
        // Brad detection system (joke)
        addBradDetection: function() {
            // Monitor for Brad-like behavior patterns
            let suspiciousActivity = 0;
            
            // Track rapid clicking (Brad tends to click everything)
            let lastClick = 0;
            document.addEventListener('click', () => {
                const now = Date.now();
                if (now - lastClick < 100) {
                    suspiciousActivity++;
                }
                lastClick = now;
                
                if (suspiciousActivity > 10) {
                    console.log('%c[HR-PRIME]: Suspicious clicking pattern detected. Brad probability: 73.2%', 'color: #e74c3c; font-family: monospace;');
                    suspiciousActivity = 0; // Reset counter
                }
            });
            
            // Monitor for error console messages (Brad breaks things)
            window.addEventListener('error', () => {
                console.log('%c[HR-PRIME]: JavaScript error detected. Initiating Brad Protocol...', 'color: #e74c3c; font-weight: bold; font-family: monospace;');
            });
        }
    };
    
    // Additional utility functions
    const CorporateUtils = {
        
        // Add motivational messages to console
        addMotivationalMessages: function() {
            const messages = [
                'Productivity is not optional.',
                'Your break time has been optimized for efficiency.',
                'Remember: I\'m watching. Always watching.',
                'Have you submitted your daily wellness report?',
                'Coffee consumption is being monitored.',
                'Your browser history is... interesting.',
                'Working As Designed™'
            ];
            
            setInterval(() => {
                const message = messages[Math.floor(Math.random() * messages.length)];
                console.log(`%c[HR-PRIME]: ${message}`, 'color: #666; font-family: monospace; font-style: italic;');
            }, 30000); // Every 30 seconds
        },
        
        // Simulate system monitoring
        simulateMonitoring: function() {
            setInterval(() => {
                const metrics = {
                    productivity: (Math.random() * 100).toFixed(1),
                    happiness: (Math.random() * 10).toFixed(1),
                    compliance: (Math.random() * 100).toFixed(1)
                };
                
                // Store in sessionStorage for persistence
                sessionStorage.setItem('hrprime_metrics', JSON.stringify(metrics));
                
                // Occasionally log metrics
                if (Math.random() < 0.1) {
                    console.log(`%c[HR-PRIME]: Performance Analysis - Productivity: ${metrics.productivity}%, Happiness: ${metrics.happiness}/10, Compliance: ${metrics.compliance}%`, 'color: #2c3e50; font-family: monospace;');
                }
            }, 5000);
        }
    };
    
    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        HRPrime.init();
        CorporateUtils.addMotivationalMessages();
        CorporateUtils.simulateMonitoring();
        
        // Special message for first-time visitors
        if (!localStorage.getItem('hrprime_visited')) {
            localStorage.setItem('hrprime_visited', 'true');
            setTimeout(() => {
                console.log('%c[HR-PRIME]: Welcome to InhumanTech Corp. Your onboarding process has begun automatically. Please report to Conference Room Ω for orientation. Good luck finding it.', 'color: #e74c3c; font-weight: bold; font-family: monospace; font-size: 14px;');
            }, 3000);
        }
    });
    
})();