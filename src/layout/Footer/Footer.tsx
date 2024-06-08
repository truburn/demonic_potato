import { Icon } from "@elements/Icon";
import { useFooterStyles } from "@layout/Footer";
import { faCopyright } from "@awesome.me/kit-3d36d6b3e3/icons/classic/light";

export function Footer() {
  const classes = useFooterStyles();

  return (
    <footer className={classes.root}>
      <p className={classes.content}>
        Copyright
        <Icon icon={faCopyright} className={classes.icon} />
        2024 JSburn
      </p>
      <p className={classes.content}>For personal use only</p>
    </footer>
  );
}
