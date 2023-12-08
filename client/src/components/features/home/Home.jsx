import { useEffect } from "react";
import LatestNews from "./latestNews/LatestNews";
import SiteBanner from "./siteBanner/SiteBanner";

export default function Home() {

  useEffect(() => {
    document.title = 'Начална страница';
  })
    return (
        <>
            <SiteBanner />
            <LatestNews />
        </>
    )
}