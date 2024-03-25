function updateTime() {
  let timestamp_UTC = new Date();
  let readable_timestamp_AEST =
    timestamp_UTC
      .toLocaleDateString("en-AU", { timeZone: "Australia/Sydney" })
      .replace(/\//g, "-") +
    " " +
    timestamp_UTC.toLocaleTimeString("en-AU", { timeZone: "Australia/Sydney" });
  document.getElementById("time").innerText = readable_timestamp_AEST;
}

setInterval(updateTime, 1000);
