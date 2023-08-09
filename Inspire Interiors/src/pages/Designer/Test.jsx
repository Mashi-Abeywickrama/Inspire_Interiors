import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Test() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      href="/"
      variant="h5"
      fontWeight="bold"
      color="black !important"
    >
      Recent Earnings
    </Link>,

    <Typography key="3" color="text.inherit" variant="h5" fontWeight="bold">
      All
    </Typography>,
  ];
  return (
    <div className="text.primary">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="large" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}

export default Test;
