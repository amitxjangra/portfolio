import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import LoadingScreen from "~/components/LoadingScreen";
import { Welcome } from "~/welcome/welcome";

export default function Home() {
  return <Welcome />;
}
