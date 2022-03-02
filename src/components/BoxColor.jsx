export default function BoxColor(props) {
  function colors(r, g, b) {
    return `rgb(${r},${g},${b})`;
  }
  return (
    <div style={{ backgroundColor: colors(props.r, props.g, props.b) }}>
      <p>RGB</p>
    </div>
  );
}
