export default function (...args: Record<string, any>[]) {
  return args.reduce((props, rwaAttrs) => {
    const attrs = { ...rwaAttrs };
    props.className = [props.className, attrs.className, attrs.class]
      .filter(Boolean)
      .join(" ");
    delete attrs.className;
    delete attrs.class;
    return {
      ...props,
      ...attrs,
    };
  }, {});
}
