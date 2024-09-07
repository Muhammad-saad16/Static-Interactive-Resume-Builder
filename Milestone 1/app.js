// Get references to the button and the skills section
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
// Add an event listener to the button
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    }
    else {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});
