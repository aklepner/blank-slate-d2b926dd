import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/built-different")({
  component: () => <Outlet />,
});
