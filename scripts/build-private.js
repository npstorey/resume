#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const baseResumePath = path.join(__dirname, '../src/resume.json');
const privateResumePath = path.join(__dirname, '../src/resume.private.json');
const contactPath = path.join(__dirname, '../src/contact.private.json');

// Check if contact file exists
if (!fs.existsSync(contactPath)) {
  console.log('Creating contact.private.json template...');
  const template = {
    email: "your.email@example.com",
    phone: "(555) 555-5555"
  };
  fs.writeFileSync(contactPath, JSON.stringify(template, null, 2));
  console.log(`Please edit ${contactPath} with your contact info, then run this script again.`);
  process.exit(1); // Exit with error so the build chain stops
}

// Read files
const baseResume = JSON.parse(fs.readFileSync(baseResumePath, 'utf8'));
const contact = JSON.parse(fs.readFileSync(contactPath, 'utf8'));

// Merge contact info into basics
baseResume.basics.email = contact.email;
baseResume.basics.phone = contact.phone;

// Write private resume
fs.writeFileSync(privateResumePath, JSON.stringify(baseResume, null, 2));
console.log(`Created ${privateResumePath} with contact info.`);
