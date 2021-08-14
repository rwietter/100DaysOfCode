const hr = () =>
  "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(126, 126, 126, 0.75), rgba(0, 0, 0, 0))"

export const lightTheme = {
  body:
    "linear-gradient(to right, #f6f7f9, #fafafb, #fefeff, #fafafb, #f6f7f9)",
  text: "#363537",
  toggleBorder: "#FFF",
  toggle: "#000",
  title: "#c12b5c",
  hr,
  link: "#0c9c5c",
  gradient: "linear-gradient(#39598A, #79D7ED)",
}

export const darkTheme = {
  body:
    "linear-gradient(to right, #262c32, #20252a, #1d2227, #20252a, #262c32)",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  toggle: "#FFF",
  title: "#df7296",
  hr,
  link: "#33c785",
  gradient: "linear-gradient(90deg, #11998e 0%,#38ef7d 100% )",
}
