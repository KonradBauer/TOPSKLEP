import { Footer } from "../Footer/Footer.jsx";
import { MainMenu } from "../MainMenu/MainMenu.jsx";
import { Logo } from "../Logo/Logo.jsx";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector.jsx";
import { IconMenu } from "../IconMenu/IconMenu.jsx";
import { TopBar } from "../TopBar/TopBar.jsx";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu.jsx";
import { MainContent } from "../MainContent/MainContent.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <MainContent>
        <TopBar>
          <MainMenu />
          <Logo />
          <div>
            <CurrencySelector />
            <IconMenu />
          </div>
        </TopBar>
        <CategoryMenu />
        {children}
      </MainContent>
      <Footer />
    </>
  );
};
