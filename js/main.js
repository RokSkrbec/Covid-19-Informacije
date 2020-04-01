const allCountriesCovidData = []
const table = document.getElementById('table-body')

fetch('https://covid19-server.chrismichael.now.sh/api/v1/AllReports')
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.reports[0].table[0].length - 1; i++) {
      let firstCaseDateArray = data.reports[0].table[0][i].FirstCase.split(' ')
      let firstCaseDate = `${firstCaseDateArray[0]} ${firstCaseDateArray[1]}`
      console.log(firstCaseDate)
      allCountriesCovidData[i] = {
        TotalCases: data.reports[0].table[0][i].TotalCases === '' ? '' : parseInt(data.reports[0].table[0][i].TotalCases.replace(',', '')),
        NewCases: data.reports[0].table[0][i].NewCases === '' ? '' : parseInt(data.reports[0].table[0][i].NewCases.replace('+', '').replace(',', '')),
        TotalDeaths: data.reports[0].table[0][i].TotalDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].TotalDeaths.replace(',', '')),
        NewDeaths: data.reports[0].table[0][i].NewDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].NewDeaths.replace('+', '').replace(',', '')),
        TotalRecovered: data.reports[0].table[0][i].TotalRecovered === '' ? '' : parseInt(data.reports[0].table[0][i].TotalRecovered.replace(',', '')),
        ActiveCases: data.reports[0].table[0][i].ActiveCases === '' ? '' : parseInt(data.reports[0].table[0][i].ActiveCases.replace(',', '')),
        Deaths_1M_pop: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')),
        FirstCase: firstCaseDate,
        Country: data.reports[0].table[0][i].Country,
        Serious_Critical: data.reports[0].table[0][i].Serious_Critical === '' ? '' : parseInt(data.reports[0].table[0][i].Serious_Critical.replace(',', '')),
        TotCases_1M_Pop: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')),
        DeathsPercent: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')) * 0.0001,
        CasesPercent: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')) * 0.0001
      }
      //console.log(data.reports[0].table[0])
    }
    allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
    showTableData()
  })

//--------------------------- START "order by" event listeners ----------------------------

let order = 'asc'
let orderContainer = document.querySelectorAll('.order')

document.querySelector('.header-country').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-country').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('Country', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-country').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('Country', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-total-cases').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-cases').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-cases').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('TotalCases', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-new-cases').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-new-cases').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('NewCases', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-new-cases').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('NewCases', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-total-deaths').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-deaths').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('TotalDeaths', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-deaths').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('TotalDeaths', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-new-deaths').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-new-deaths').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('NewDeaths', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-new-deaths').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('NewDeaths', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-total-recovered').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-recovered').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('TotalRecovered', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-recovered').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('TotalRecovered', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-active-cases').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-active-cases').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('ActiveCases', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-active-cases').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('ActiveCases', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-deaths-1m-pop').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-deaths-1m-pop').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('Deaths_1M_pop', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-deaths-1m-pop').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('Deaths_1M_pop', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-first-case').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-first-case').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('FirstCase', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-first-case').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('FirstCase', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-serious-critical').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-serious-critical').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('Serious_Critical', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-serious-critical').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('Serious_Critical', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-total-cases-1m-pop').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-cases-1m-pop').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('TotCases_1M_pop', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-total-cases-1m-pop').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('TotCases_1M_pop', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-deaths-percent').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-deaths-percent').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('DeathsPercent', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-deaths-percent').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('DeathsPercent', 'asc'))
    showTableData()
    order = 'asc'
  }
})

//---------------------------------------

document.querySelector('.header-cases-percent').addEventListener('click', () => {
  table.innerHTML = ''
  if (order == 'asc') {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-cases-percent').innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
    allCountriesCovidData.sort(compareValues('CasesPercent', 'desc'))
    showTableData()
    order = 'desc'
  } else {
    //document.querySelector('.order-country').innerHTML = ''
    orderContainer.forEach(order => {
      order.innerHTML = ''
    })
    document.querySelector('.order-cases-percent').innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
    allCountriesCovidData.sort(compareValues('CasesPercent', 'asc'))
    showTableData()
    order = 'asc'
  }
})
//--------------------------- END "order by" event listeners ----------------------------

/*
let orderDirInd = document.querySelectorAll('.order')
let header = document.querySelectorAll('.header')

orderDirInd.forEach((headerOrder, index) => {
  document.querySelector('.header').addEventListener('click', () => {
    table.innerHTML = ''
    if (order == 'asc') {
      header.forEach((header, index) => {
        headerOrder.innerHTML = ''
      })
      headerOrder.innerHTML = '<img src="images/order-desc.svg" alt="order desc arrow">'
      allCountriesCovidData.sort(compareValues('Country', 'desc'))
      showTableData()
      order = 'desc'
    } else {
      header.forEach((header, index) => {
        headerOrder.innerHTML = ''
      })
      headerOrder.innerHTML = '<img src="images/order-asc.svg" alt="order asc arrow">'
      allCountriesCovidData.sort(compareValues('Country', 'asc'))
      showTableData()
      order = 'asc'
    }
  })
})
*/

function showTableData() {
  for (let i = 0; i < allCountriesCovidData.length; i++) {
    DeathsPercent = allCountriesCovidData[i].DeathsPercent
    DeathsPercent = Number(DeathsPercent).toFixed(4)
    CasesPercent = allCountriesCovidData[i].CasesPercent
    CasesPercent = Number(CasesPercent).toFixed(4)
    table.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td style="text-align:left; padding-left: 1rem">${allCountriesCovidData[i].Country}</td>
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
