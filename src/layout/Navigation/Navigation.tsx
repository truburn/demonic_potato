import { useNavigationStyles } from "@layout/Navigation";
import { NavLink } from "react-router-dom";
import {
  faBooks,
  faBookMedical,
  faFileCirclePlus,
} from "@awesome.me/kit-3d36d6b3e3/icons/duotone/solid";
import { faMagnifyingGlass } from "@awesome.me/kit-3d36d6b3e3/icons/classic/solid";
import { Icon } from "@components/Icon";

export function Navigation() {
  const classes = useNavigationStyles();

  return (
    <nav className={classes.root}>
      <NavLink
        to="/library"
        title="Cookbook Library"
        className={classes.navLink}
      >
        <Icon icon={faBooks} className={classes.navIcon} swapOpacity />
      </NavLink>
      <NavLink to="/recipes" title="Search Recipes" className={classes.navLink}>
        <Icon icon={faMagnifyingGlass} className={classes.navIcon} />
      </NavLink>
      <NavLink to="/book/edit" title="Add Cookbook" className={classes.navLink}>
        <Icon icon={faBookMedical} className={classes.navIcon} />
      </NavLink>
      <NavLink to="/recipe/edit" title="Add Recipe" className={classes.navLink}>
        <Icon icon={faFileCirclePlus} className={classes.navIcon} swapOpacity />
      </NavLink>
    </nav>
  );
}
