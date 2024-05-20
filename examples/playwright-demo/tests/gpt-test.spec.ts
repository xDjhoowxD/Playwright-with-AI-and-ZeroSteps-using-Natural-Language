import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Automation Practice Forms', () => {
  test('Verify page elements in the page', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    await ai('Click on the button (there is no page)', { page, test })
    await ai ('Verify if page has "First Name" field', {page, test})
    await ai ('Verify if page has "Last Name" field', {page, test})
    await ai ('Verify if page has "Email" field', {page, test})
    await ai ('Verify if page has "Gender" field', {page, test})
    await ai ('Verify if page has "Date of Birth" field', {page, test})
    await ai ('Verify if page has "Subjects" field', {page, test})
    await ai ('Verify if page has "Hobbies" field', {page, test})
    await ai ('Verify if page has "Picture" field', {page, test})
    await ai ('Verify if page has "Current Address" field', {page, test})
    await ai ('Verify if page has "State and City" field', {page, test})
    await ai ('Verify if page has "Submit" button', {page, test})
  })

  test('[EN-US] Fill forms with valid credentials', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    await ai ('Fill "First Name" field with "Jhonatan" ', {page, test})
    await ai ('Fill "Last Name" field with "Pereira" ', {page, test})
    await ai ('Fill "Email" field with "jhonatanpereiratest3@gmail.com" ', {page, test})
    await ai ('Select "Gender" field as "Male" ', {page, test})
    await ai ('Fill "Mobile Number" textBox with "1234567890" ', {page, test})
    await ai ('Fill "Date of Birth" field with "05 April 1996" and press ENTER ', {page, test})
    await ai ('press ENTER in the keyboard ', {page, test})
    await ai ('Select "Music" as your Hobbie', {page, test})
    await ai ('Scroll down until the end of the page', {page, test})
    await ai ('Fill "Current Address" textBox field with "MyStreetName, 1234 - State, Country" ', {page, test})
    await ai ('Click at "Select State" field ', {page, test})
    await ai ('Select "NCR" ', {page, test})
    await ai ('Click at "Select City" field ', {page, test})
    await ai ('Select "Delhi" ', {page, test})
    await ai ('Fill "Subjects" field with "Test" ', {page, test})
    await ai ('Tap "Submit" button', {page, test})
    await ai ('Verify if a message saying "Thanks for submitting the form" appears in the screen ', {page, test})
  })

  test('[PT-BR] Preencha o Forms com credenciais válidas', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    await ai ('Preencha o campo "First Name" textbox com "Jhonatan" ', {page, test})
    await ai ('Preencha o campo "Last Name" textbox com "Pereira" ', {page, test})
    await ai ('Preencha o campo "Email" com "jhonatanpereiratest3@gmail.com" ', {page, test})
    await ai ('Selecione "Gender" como "Male" ', {page, test})
    await ai ('Preencha o campo "Mobile Number" textBox com "1234567890" ', {page, test})
    await ai ('Preencha o campo "Date of Birth" com "05 April 1996" ', {page, test})
    await ai ('Pressione ENTER no teclado ', {page, test})
    await ai ('Selecione "Music" como Hobbie', {page, test})
    await ai ('Scrole para baixo até o fim da página', {page, test})
    await ai ('Preencha o campo "Current Address" textBox com "MyStreetName, 1234 - State, Country" ', {page, test})
    await ai ('Clique em "Select State" ', {page, test})
    await ai ('Selecione "NCR" ', {page, test})
    await ai ('Clique em "Select City" ', {page, test})
    await ai ('Selecione "Delhi" ', {page, test})
    await ai ('Preencha o campo "Subjects" com "Test" ', {page, test})
    await ai ('Clique no botão de "Submit" ', {page, test})
    await ai ('Verifique se há uma mensagem "Thanks for submitting the form" presente na tela  ', {page, test})
  })
})