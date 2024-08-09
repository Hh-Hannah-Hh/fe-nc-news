import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Loading from "../Components/Loading";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Stack direction="column" spacing={2}>
        <Button className="fancy-buttons" variant="outlined">
          Browse all items
        </Button>
      </Stack>
    );
  }
}

export default Categories;
