const allCountriesCovidData = []
const dataContainer = document.querySelector('.data-container')
const errorMessageContainer = document.querySelector('.error-message')

const localization = 'en-GB'

fetch('https://covid19-server.chrismichael.now.sh/api/v1/AllReports', {})
  .then(res => res.json())
  .then(data => {
    document.querySelector('.cases-number').innerHTML = data.reports[0].cases.toLocaleString(localization)
    document.querySelector('.deaths-number').innerHTML = data.reports[0].deaths.toLocaleString(localization)
    document.querySelector('.recovered-number').innerHTML = data.reports[0].recovered.toLocaleString(localization)
    document.querySelector('.curently-infected-patients-number').innerHTML = data.reports[0].active_cases[0].currently_infected_patients.toLocaleString(localization)
    document.querySelector('.in-mid-condition-number').innerHTML = data.reports[0].active_cases[0].inMidCondition.toLocaleString(localization)
    document.querySelector('.critical-states-number').innerHTML = data.reports[0].active_cases[0].criticalStates.toLocaleString(localization)
    document.querySelector('.closed-recovered-number').innerHTML = data.reports[0].closed_cases[0].recovered.toLocaleString(localization)
    document.querySelector('.closed-deaths-number').innerHTML = data.reports[0].closed_cases[0].deaths.toLocaleString(localization)
    for (let i = 0; i < data.reports[0].table[0].length - 1; i++) {
      allCountriesCovidData[i] = {
        TotalCases: data.reports[0].table[0][i].TotalCases === '' ? '' : parseInt(data.reports[0].table[0][i].TotalCases.replace(',', '')),
        NewCases: data.reports[0].table[0][i].NewCases === '' ? '' : parseInt(data.reports[0].table[0][i].NewCases.replace('+', '').replace(',', '')),
        TotalDeaths: data.reports[0].table[0][i].TotalDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].TotalDeaths.replace(',', '')),
        NewDeaths: data.reports[0].table[0][i].NewDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].NewDeaths.replace('+', '').replace(',', '')),
        TotalRecovered: data.reports[0].table[0][i].TotalRecovered === '' ? '' : parseInt(data.reports[0].table[0][i].TotalRecovered.replace(',', '')),
        ActiveCases: data.reports[0].table[0][i].ActiveCases === '' ? '' : parseInt(data.reports[0].table[0][i].ActiveCases.replace(',', '')),
        Deaths_1M_pop: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')),
        Country: data.reports[0].table[0][i].Country,
        Serious_Critical: data.reports[0].table[0][i].Serious_Critical === '' ? '' : parseInt(data.reports[0].table[0][i].Serious_Critical.replace(',', '')),
        TotCases_1M_Pop: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')),
        DeathsPercent: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')) * 0.0001,
        CasesPercent: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')) * 0.0001
      }
    }
    allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
    document.querySelector('.order-total-cases').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    showTableData()
  })
  .catch(err => {
    console.log(err)
    errorMessageContainer.innerHTML = 'Napaka pri nalaganju podatkov, poskusite kasneje.'
  })

let order = 'asc'
let orderContainer = document.querySelectorAll('.order')

function orderByColumn(orderClass, orderColumn) {
  console.log(orderClass + ', ' + orderColumn)

  dataContainer.innerHTML = ''

  if (order == 'asc') {
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector(orderClass).innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues(orderColumn, 'desc'))
    showTableData()
    order = 'desc'
  } else {
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector(orderClass).innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues(orderColumn, 'asc'))
    showTableData()
    order = 'asc'
  }
}

function showTableData() {
  for (let i = 0; i < allCountriesCovidData.length; i++) {
    DeathsPercent = allCountriesCovidData[i].DeathsPercent
    DeathsPercent = Number(DeathsPercent).toFixed(4)
    CasesPercent = allCountriesCovidData[i].CasesPercent
    CasesPercent = Number(CasesPercent).toFixed(4)
    dataContainer.innerHTML += `<div class="data-row">
    <div class="cell">${i + 1}</div>
    <div class="cell">${allCountriesCovidData[i].Country}</div>
    <div class="cell">${allCountriesCovidData[i].TotalCases.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].NewCases.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].TotalDeaths.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].NewDeaths.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].TotalRecovered.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].ActiveCases.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].Deaths_1M_pop.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].Serious_Critical.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].TotCases_1M_Pop.toLocaleString(localization)}</div>
    <div class="cell">${DeathsPercent}</div>
    <div class="cell">${CasesPercent}</div>
  </div>
  `
  }
}

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}

let IsTouchDevice = navigator.maxTouchPoints || 'ontouchstart' in document.documentElement
let searchBarEventListener = ''
if (IsTouchDevice) {
  searchBarEventListener = 'change'
} else {
  searchBarEventListener = 'keyup'
}

const searchBar = document.forms['search'].querySelector('input')

searchBar.addEventListener(searchBarEventListener, function(e) {
  dataContainer.innerHTML = ''
  const term = e.target.value.toLowerCase()
  for (let i = 0; i < allCountriesCovidData.length; i++) {
    if (allCountriesCovidData[i].Country.toLowerCase().indexOf(term) != -1) {
      DeathsPercent = allCountriesCovidData[i].DeathsPercent
      DeathsPercent = Number(DeathsPercent).toFixed(4)
      CasesPercent = allCountriesCovidData[i].CasesPercent
      CasesPercent = Number(CasesPercent).toFixed(4)
      dataContainer.innerHTML += `<div class="data-row">
    <div class="cell">${i + 1}</div>
    <div class="cell">${allCountriesCovidData[i].Country}</div>
    <div class="cell">${allCountriesCovidData[i].TotalCases.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].NewCases.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].TotalDeaths.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].NewDeaths.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].TotalRecovered.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].ActiveCases.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].Deaths_1M_pop.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].Serious_Critical.toLocaleString(localization)}</div>
    <div class="cell">${allCountriesCovidData[i].TotCases_1M_Pop.toLocaleString(localization)}</div>
    <div class="cell">${DeathsPercent}</div>
    <div class="cell">${CasesPercent}</div>
  </div>
  `
    }
  }
})
//-----------------------------
