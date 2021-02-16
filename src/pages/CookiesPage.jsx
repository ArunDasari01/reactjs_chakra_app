import useThemePage from "./useThemePage";

export default function CookiesPage() {
  const ThemePage = useThemePage();

  return (
    <ThemePage>
      <div>Cookies Page</div>
    </ThemePage>
  );
}
