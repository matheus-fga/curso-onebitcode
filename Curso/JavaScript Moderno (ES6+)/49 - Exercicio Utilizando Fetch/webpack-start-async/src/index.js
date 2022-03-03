import "core-js"
import "regenerator-runtime/runtime"
import Sentry from "./sentry"
import { getSentry } from "./sentry_service"

async function loadSentry() {
  let sentries = new Array()
  const sentryJSON = await getSentry()
  sentryJSON.forEach(sentry => {
    let newSentry = new Sentry(sentry["sentryId"], sentry["designation"], sentry["year_range_min"], sentry["year_range_max"])
    sentries.push(newSentry)
  })
  renderSentries(sentries)
}

function renderSentries(sentries) {
  const sentriesOl = document.getElementById("sentries-list")
  sentries.forEach(sentry => {
    const li = document.createElement("li")
    let liText = `(${sentry.id}) ${sentry.name}: risco de colisão entre ${sentry.collisionMinYear} e ${sentry.collisionMaxYear}`
    li.innerText = liText
    sentriesOl.append(li)
  })
}

loadSentry()