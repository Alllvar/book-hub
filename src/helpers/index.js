export const getStyle = (props) => ({
  position: 'absolute',
  top: props.top || '0',
  right: props.right || '0',
  width: props.width || '32px',
  height: props.height || '32px',
});