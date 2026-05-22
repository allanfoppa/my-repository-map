import { Drawer } from "../components/Drawer";
import { LightBox } from "../components/Lightbox";
import { Modal } from "../components/Modal";

type LayoutProps = {
  header: string;
  navbar: string;
  search: string;
  content: string;
};

export function Layout({
  header,
  navbar,
  search,
  content,
}: LayoutProps): string {
  return `
    <div class="min-h-screen py-8 px-6" data-testid="layout">
      <div class="max-w-4xl mx-auto">
        ${header}
        ${navbar}
        ${search}
        ${content}
        ${Drawer()}
        ${Modal()}
        ${LightBox()}
      </div>
    </div>
  `;
}
