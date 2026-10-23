# HMCL project website

Static project information for the HMCL desktop distribution independently maintained by XDRi.Club.

Website: https://jnlk-cn.github.io/HMCL-Website/

Project contact: [minemacraft@outlook.com](mailto:minemacraft@outlook.com)

Current release: [build/20261023-4e8cad4](https://github.com/jnlk-cn/HMCL-Desktop/releases/tag/build/20261023-4e8cad4). The [website download section](https://jnlk-cn.github.io/HMCL-Website/#downloads) links to its launcher packages, corresponding source and checksums. Launcher source and release assets remain in the private `jnlk-cn/HMCL-Desktop` repository.

This public repository contains the website only, with no analytics, login forms or external scripts. Product image slots contain direct captures of this distribution's standard interface and project-authored authentication diagrams; see [image provenance](assets/README.md).

## Languages

The language controls switch the complete page between English and Simplified Chinese, including navigation, accessible image descriptions, download information and verification diagrams. The first visit follows the browser's language preference. A choice is stored in the current URL, without cookies or local storage:

- [English](https://jnlk-cn.github.io/HMCL-Website/?lang=en)
- [简体中文](https://jnlk-cn.github.io/HMCL-Website/?lang=zh-CN)

The original launcher screenshots remain unchanged. Their captions are translated. English HTML remains fully readable when JavaScript is unavailable; the language controls appear only when they are functional.

## Motion

Motion is deliberately brief and does not loop or move the page with the pointer.

| Surface | Behavior | Timing |
| --- | --- | --- |
| Hero text and actions | One entrance with a 14 px rise | 640 ms; 65 ms stagger |
| Section headings, images and cards | Reveal once as they enter the viewport, with an 18 px rise | 540 ms; up to 140 ms stagger |
| Language change | Content crossfade; retain the current section's position | 180 ms |
| Navigation | Sticky header shadow and current-section underline | 200–220 ms |
| Links and cards | Small pointer-hover lift, image zoom and border feedback | 180–380 ms |

`prefers-reduced-motion` removes animations, hover movement and smooth scrolling. All content remains visible when motion is disabled or Intersection Observer is unavailable. There are no animation libraries or third-party script requests.

NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
