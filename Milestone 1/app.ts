// Get references to the buttons and sections
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const toggleEducationBtn = document.getElementById('toggle-education-btn') as HTMLButtonElement;
const toggleWorkBtn = document.getElementById('toggle-work-btn') as HTMLButtonElement;

const skillsSection = document.getElementById('skills') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;
const workSection = document.getElementById('work-experience') as HTMLElement;

// Add event listeners for Skills
toggleSkillsBtn?.addEventListener('click', () => {
  if (skillsSection?.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills';
  }
});

// Add event listeners for Education
toggleEducationBtn?.addEventListener('click', () => {
  if (educationSection?.style.display === 'none') {
    educationSection.style.display = 'block';
    toggleEducationBtn.textContent = 'Hide Education';
  } else {
    educationSection.style.display = 'none';
    toggleEducationBtn.textContent = 'Show Education';
  }
});

// Add event listeners for Work Experience
toggleWorkBtn?.addEventListener('click', () => {
  if (workSection?.style.display === 'none') {
    workSection.style.display = 'block';
    toggleWorkBtn.textContent = 'Hide Work Experience';
  } else {
    workSection.style.display = 'none';
    toggleWorkBtn.textContent = 'Show Work Experience';
  }
});
