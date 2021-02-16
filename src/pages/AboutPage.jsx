import useThemePage from "./useThemePage";

export default function AboutPage() {
  const ThemePage = useThemePage();

  return (
    <ThemePage>
      <div>About Us</div>
    </ThemePage>
  );
}
