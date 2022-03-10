export default function Greetings(props) {
  function lang(propslang) {
    switch (propslang) {
      case 'de':
        return 'GutenTag';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'que haces?';
    }
  }
  return (
    <div>
      <p>Lang: {lang(props.lang)}</p>
      <p>Children: {props.children}</p>
    </div>
  );
}
