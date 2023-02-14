const weight = 100;
export default function change(state = weight, action) {
  switch (action.type) {
    case '증가':
      return (state += 1);
    case '감소':
      return (state -= 1);
    default:
      return state;
  }
}
