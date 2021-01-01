goBtn.onclick = go
searchInp.onkeydown = e => e.key == "Enter" ? go() : ""

function go() {
  const search = searchInp.value
  iframe.src = search
}