const allCountriesCovidData = []
const table = document.getElementById('table-body')

fetch('https://covid19-server.chrismichael.now.sh/api/v1/AllReports')
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.reports[0].table[0].length; i++) {
      allCountriesCovidData[i] = {
        TotalCases: data.reports[0].table[0][i].TotalCases === '' ? '' : parseInt(data.reports[0].table[0][i].TotalCases.replace(',', '')),
        NewCases: data.reports[0].table[0][i].NewCases === '' ? '' : parseInt(data.reports[0].table[0][i].NewCases.replace('+', '').replace(',', '')),
        TotalDeaths: data.reports[0].table[0][i].TotalDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].TotalDeaths.replace(',', '')),
        NewDeaths: data.reports[0].table[0][i].NewDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].NewDeaths.replace('+', '').replace(',', '')),
        TotalRecovered: data.reports[0].table[0][i].TotalRecovered === '' ? '' : parseInt(data.reports[0].table[0][i].TotalRecovered.replace(',', '')),
        ActiveCases: data.reports[0].table[0][i].ActiveCases === '' ? '' : parseInt(data.reports[0].table[0][i].ActiveCases.replace(',', '')),
        Deaths_1M_pop: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')),
        FirstCase: data.reports[0].table[0][i].FirstCase,
        Country: data.reports[0].table[0][i].Country,
        Serious_Critical: data.reports[0].table[0][i].Serious_Critical === '' ? '' : parseInt(data.reports[0].table[0][i].Serious_Critical.replace(',', '')),
        TotCases_1M_Pop: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')),
        DeathsPercent: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')) * 0.0001,
        CasesPercent: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')) * 0.0001
      }
      console.log(data.reports[0].table[0])
    }
    allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
    showTableData()
  })

//--------------------------- START "order by" event listeners ----------------------------

document.querySelector('.country-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Country', 'asc'))
  showTableData()
})

document.querySelector('.country-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Country', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.total-cases-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalCases', 'asc'))
  showTableData()
})

document.querySelector('.total-cases-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.new-cases-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewCases', 'asc'))
  showTableData()
})

document.querySelector('.new-cases-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewCases', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.total-deaths-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalDeaths', 'asc'))
  showTableData()
})

document.querySelector('.total-deaths-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalDeaths', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.new-deaths-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewDeaths', 'asc'))
  showTableData()
})

document.querySelector('.new-deaths-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewDeaths', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.total-recovered-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalRecovered', 'asc'))
  showTableData()
})

document.querySelector('.total-recovered-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalRecovered', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.active-cases-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('ActiveCases', 'asc'))
  showTableData()
})

document.querySelector('.active-cases-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('ActiveCases', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.deaths-1m-pop-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Deaths_1M_pop', 'asc'))
  showTableData()
})

document.querySelector('.deaths-1m-pop-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Deaths_1M_pop', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.first-case-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('FirstCase', 'asc'))
  showTableData()
})

document.querySelector('.first-case-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('FirstCase', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.serious-critical-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Serious_Critical', 'asc'))
  showTableData()
})

document.querySelector('.serious-critical-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Serious_Critical', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.tot-cases-1m-pop-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotCases_1M_Pop', 'asc'))
  showTableData()
})

document.querySelector('.tot-cases-1m-pop-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotCases_1M_Pop', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.deaths-percent-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('DeathsPercent', 'asc'))
  showTableData()
})

document.querySelector('.deaths-percent-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('DeathsPercent', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.cases-percent-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('CasesPercent', 'asc'))
  showTableData()
})

document.querySelector('.cases-percent-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('CasesPercent', 'desc'))
  showTableData()
})
//-------------------------------------
//--------------------------- END "order by" event listeners ----------------------------

function showTableData() {
  for (let i = 0; i < allCountriesCovidData.length; i++) {
    DeathsPercent = allCountriesCovidData[i].DeathsPercent
    DeathsPercent = Number(DeathsPercent).toFixed(4)
    CasesPercent = allCountriesCovidData[i].CasesPercent
    CasesPercent = Number(CasesPercent).toFixed(4)
    table.innerHTML += `<tr>
    <td>${allCountriesCovidData[i].Country}</td>
    <td>${allCountriesCovidData[i].TotalCases}</td>
    <td>${allCountriesCovidData[i].NewCases}</td>
    <td>${allCountriesCovidData[i].TotalDeaths}</td>
    <td>${allCountriesCovidData[i].NewDeaths}</td>
    <td>${allCountriesCovidData[i].TotalRecovered}</td>
    <td>${allCountriesCovidData[i].ActiveCases}</td>
    <td>${allCountriesCovidData[i].Deaths_1M_pop}</td>
    <td>${allCountriesCovidData[i].FirstCase}</td>
    <td>${allCountriesCovidData[i].Serious_Critical}</td>
    <td>${allCountriesCovidData[i].TotCases_1M_Pop}</td>
    <td>${DeathsPercent}</td>
    <td>${CasesPercent}</td>
  </tr>
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
