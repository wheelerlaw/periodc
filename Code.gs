// A year is defined according to the following conversion definitions. In essence, a year in this
// case is not defined in absolute; rather it is defined as a ratios to other units.  
//
// Some periods have mutiple definitions to other units because of different ways the other units can 
// be defined. For example, we can define a week as 1/52 of a year. This is what we would call a canonical ratio.
// However, a week is more commonly defined as seven days. In this case, a week ends up being 7/365 of a year, or
// 52.1429 weeks in a year. Both ratios have been provided since one might be more appropriate than other
// in different circumstances. 

var ratios = {
  Yearly: 1,
  Quarterly: 4,
  Bimonthly: 6,
  Monthly: 12,
  Biweekly: 26,
  "Biweekly (Exact)": 26.07145, // Exact representation based on days rather than canonical ratio. 
  Weekly: 52,
  "Weekly (Exact)": 52.1429, // Exact representation based on days rather than canonical ratio. 
  Daily: 365,
  Hourly: 8760
}

function INAYEAR(interval) {
  return ratios[interval]
}

function PERIODC(value, period1, period2){
  return value*INAYEAR(period1)/INAYEAR(period2)
}
