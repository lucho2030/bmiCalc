
const calculate = document.getElementById('calculate')

function bmi() {
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')

    if(height !== '' && weight !== '') {
        const bmiValue = (weight / (height * height)).toFixed(1)
        result.textContent = bmiValue
    } else {
        result.textContent = 'Please enter all fields above...'
    }
}

calculate.addEventListener('click', bmi)