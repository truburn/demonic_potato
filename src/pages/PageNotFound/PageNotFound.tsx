import { faPlateUtensils } from "@awesome.me/kit-3d36d6b3e3/icons/duotone/solid";
import { Icon } from "@elements/Icon";
import { PageTitle } from "@elements/PageTitle";
import { usePageNotFoundStyles, useRedirectToHome } from "@pages/PageNotFound";
import { Link } from "react-router-dom";

export function PageNotFound() {
  const classes = usePageNotFoundStyles();
  const timeLeft = useRedirectToHome(15);

  return (
    <main className={classes.root}>
      <PageTitle>404: Page Not Found</PageTitle>
      <div className={classes.content}>
        <p className={classes.title}>Oops! Your plate is empty!</p>
        <Icon icon={faPlateUtensils} className={classes.icon} />
        <p className={classes.redirectMsg}>
          Redirecting to cook book library in {timeLeft} seconds.
          <Link to="/library" className={classes.redirectLink}>
            Go to library now.
          </Link>
        </p>
      </div>
    </main>
  );
}
