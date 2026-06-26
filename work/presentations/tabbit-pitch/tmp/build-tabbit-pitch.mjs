import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "C:/Users/Home/Documents/Tabbit/outputs/tabbit-pitch-deck.pptx";
const PREVIEW = "C:/Users/Home/Documents/Tabbit/work/presentations/tabbit-pitch/tmp/preview";
const LAYOUT = "C:/Users/Home/Documents/Tabbit/work/presentations/tabbit-pitch/tmp/layout";
const LOGO = "C:/Users/Home/.codex/codex-remote-attachments/019f0020-c73a-71d1-8b2c-0c194677e66d/7B22A85A-2646-41C3-A946-5B5076BC0295/1-รูปภาพ-1.jpg";

const W = 1280;
const H = 720;

const C = {
  ink: "#18231f",
  forest: "#245445",
  sage: "#cddfcf",
  mint: "#edf7ef",
  cream: "#fff8eb",
  coral: "#ed7d5a",
  gold: "#e0b44c",
  sand: "#e8dcc9",
  white: "#ffffff",
  muted: "#60706a",
};

async function writeBlob(file, blob) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, Buffer.from(await blob.arrayBuffer()));
}

async function imageBytes(file) {
  const bytes = await fs.readFile(file);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addText(slide, text, pos, opt = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: pos,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: opt.size ?? 24,
    bold: opt.bold ?? false,
    color: opt.color ?? C.ink,
    typeface: opt.face ?? "Aptos",
    alignment: opt.align ?? "left",
  };
  return shape;
}

function addRect(slide, pos, opt = {}) {
  return slide.shapes.add({
    geometry: opt.geometry ?? "roundRect",
    position: pos,
    fill: opt.fill ?? C.white,
    line: opt.line ?? { style: "solid", fill: opt.stroke ?? "none", width: opt.stroke ? 1 : 0 },
    borderRadius: opt.radius ?? "rounded-lg",
    shadow: opt.shadow,
  });
}

function addRule(slide, x, y, w, color = C.coral) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height: 5 },
    fill: color,
    line: { style: "solid", fill: color, width: 0 },
  });
}

async function addLogo(slide, x = 1090, y = 42, size = 82, dark = false) {
  if (dark) {
    addRect(slide, { left: x - 8, top: y - 8, width: size + 16, height: size + 16 }, {
      fill: C.white,
      radius: "rounded-xl",
      shadow: "shadow-sm",
    });
  }
  slide.images.add({
    blob: await imageBytes(LOGO),
    contentType: "image/jpeg",
    fit: "contain",
    alt: "Tabbit rabbit stair-step logo",
    position: { left: x, top: y, width: size, height: size },
  });
}

function footer(slide, n, dark = false) {
  addText(slide, `0${n}`, { left: 72, top: 646, width: 50, height: 28 }, {
    size: 16,
    bold: true,
    color: dark ? C.sage : C.muted,
  });
  addText(slide, "Tabbit", { left: 1040, top: 646, width: 120, height: 28 }, {
    size: 16,
    bold: true,
    color: dark ? C.sage : C.muted,
    align: "right",
  });
}

function pill(slide, text, x, y, w, fill = C.forest, color = C.white, size = 16) {
  addRect(slide, { left: x, top: y, width: w, height: 38 }, { fill, radius: "rounded-xl" });
  addText(slide, text, { left: x + 18, top: y + 8, width: w - 36, height: 24 }, {
    size,
    bold: true,
    color,
    align: "center",
  });
}

function bullet(slide, text, x, y, color = C.ink) {
  addRect(slide, { left: x, top: y + 7, width: 10, height: 10 }, { fill: C.coral, radius: "rounded-sm" });
  addText(slide, text, { left: x + 24, top: y, width: 500, height: 34 }, { size: 20, color });
}

async function main() {
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.mkdir(PREVIEW, { recursive: true });
  await fs.mkdir(LAYOUT, { recursive: true });

  const deck = Presentation.create({ slideSize: { width: W, height: H } });

  // 1. Cover
  {
    const s = deck.slides.add();
    s.background.fill = C.cream;
    addRect(s, { left: 0, top: 0, width: 1280, height: 720 }, { fill: C.cream, geometry: "rect" });
    addRect(s, { left: 760, top: 0, width: 520, height: 720 }, { fill: C.mint, geometry: "rect" });
    addRule(s, 72, 96, 130);
    addText(s, "Tabbit", { left: 72, top: 150, width: 560, height: 92 }, { size: 64, bold: true, color: C.forest, face: "Aptos Display" });
    addText(s, "Group habit tracker ที่ช่วยให้คนกลับมาทำต่อ เพราะมีเพื่อนเห็น progress และให้กำลังใจกัน", { left: 76, top: 262, width: 610, height: 110 }, { size: 28, color: C.ink });
    pill(s, "Free to start · Pay when groups scale", 76, 402, 330, C.forest);
    await addLogo(s, 804, 162, 330);
    addText(s, "Pitch Deck", { left: 78, top: 610, width: 250, height: 32 }, { size: 20, bold: true, color: C.muted });
  }

  // 2. Origin
  {
    const s = deck.slides.add();
    s.background.fill = C.white;
    await addLogo(s);
    addText(s, "ที่มา", { left: 72, top: 78, width: 400, height: 60 }, { size: 42, bold: true, color: C.forest, face: "Aptos Display" });
    addRule(s, 74, 150, 100);
    addText(s, "หลายคนไม่ได้ขาดเป้าหมาย แต่ขาดระบบที่ทำให้กลับมาทำต่อในวันที่ motivation หาย", { left: 74, top: 190, width: 760, height: 110 }, { size: 30, bold: true });
    addRect(s, { left: 76, top: 360, width: 326, height: 150 }, { fill: C.cream, stroke: C.sand });
    addRect(s, { left: 476, top: 360, width: 326, height: 150 }, { fill: C.mint, stroke: C.sage });
    addRect(s, { left: 876, top: 360, width: 326, height: 150 }, { fill: "#fff1e9", stroke: "#efb39c" });
    addText(s, "เริ่มง่าย", { left: 102, top: 394, width: 260, height: 34 }, { size: 26, bold: true, color: C.forest });
    addText(s, "แต่รักษาความต่อเนื่องยาก", { left: 102, top: 438, width: 260, height: 46 }, { size: 20, color: C.muted });
    addText(s, "ทำคนเดียว", { left: 502, top: 394, width: 260, height: 34 }, { size: 26, bold: true, color: C.forest });
    addText(s, "ไม่มีใครเห็นความคืบหน้า", { left: 502, top: 438, width: 260, height: 46 }, { size: 20, color: C.muted });
    addText(s, "กลับมาพรุ่งนี้", { left: 902, top: 394, width: 260, height: 34 }, { size: 26, bold: true, color: C.forest });
    addText(s, "ต้องมีแรงจากกลุ่มช่วยพยุง", { left: 902, top: 438, width: 260, height: 46 }, { size: 20, color: C.muted });
    footer(s, 2);
  }

  // 3. Pain Point
  {
    const s = deck.slides.add();
    s.background.fill = C.forest;
    await addLogo(s, 1090, 42, 82, true);
    addText(s, "Pain Point", { left: 72, top: 76, width: 440, height: 58 }, { size: 42, bold: true, color: C.white, face: "Aptos Display" });
    addText(s, "Habit tracker ส่วนใหญ่ช่วย “บันทึก” แต่ไม่ได้สร้างแรงรับผิดชอบจากคนรอบตัว", { left: 74, top: 154, width: 760, height: 86 }, { size: 28, color: C.sage, bold: true });
    const items = [
      ["Solo motivation", "ต้องพึ่งใจตัวเองทุกวัน"],
      ["Hidden progress", "ไม่มี social context ให้กลับมา"],
      ["Chat is messy", "LINE/Sheets ตาม progress ยาก"],
      ["Streak shame", "พลาดแล้วรู้สึกล้มเหลวและเลิกใช้"],
    ];
    items.forEach(([h, b], i) => {
      const x = 86 + (i % 2) * 560;
      const y = 310 + Math.floor(i / 2) * 130;
      addRect(s, { left: x, top: y, width: 480, height: 92 }, { fill: "#ffffff12", stroke: "#8fb49b", radius: "rounded-xl" });
      addText(s, h, { left: x + 24, top: y + 18, width: 360, height: 28 }, { size: 24, bold: true, color: C.white });
      addText(s, b, { left: x + 24, top: y + 52, width: 390, height: 28 }, { size: 19, color: C.sage });
    });
    footer(s, 3, true);
  }

  // 4. Solution
  {
    const s = deck.slides.add();
    s.background.fill = C.cream;
    await addLogo(s);
    addText(s, "Solution", { left: 72, top: 72, width: 420, height: 58 }, { size: 42, bold: true, color: C.forest, face: "Aptos Display" });
    addText(s, "เปลี่ยน check-in จากงานส่วนตัว ให้เป็น commitment เล็ก ๆ ที่กลุ่มรับรู้และช่วยกันรักษา", { left: 74, top: 146, width: 820, height: 86 }, { size: 28, bold: true });
    const steps = [
      "Create group",
      "Set shared habit",
      "Daily check-in",
      "See progress",
      "Encourage",
      "Return tomorrow",
    ];
    steps.forEach((t, i) => {
      const x = 74 + i * 190;
      addRect(s, { left: x, top: 346, width: 150, height: 116 }, { fill: i % 2 ? C.mint : C.white, stroke: C.sand, radius: "rounded-xl", shadow: "shadow-sm" });
      addText(s, String(i + 1), { left: x + 18, top: 366, width: 38, height: 30 }, { size: 24, bold: true, color: C.coral });
      addText(s, t, { left: x + 18, top: 408, width: 112, height: 46 }, { size: 20, bold: true, color: C.forest, align: "center" });
      if (i < steps.length - 1) addText(s, "→", { left: x + 158, top: 389, width: 42, height: 42 }, { size: 30, bold: true, color: C.coral, align: "center" });
    });
    addText(s, "Core loop: กลุ่มเล็ก เห็นกันชัด ให้กำลังใจกันง่าย และกลับมาทำต่อวันถัดไป", { left: 120, top: 544, width: 1040, height: 50 }, { size: 24, bold: true, color: C.forest, align: "center" });
    footer(s, 4);
  }

  // 5. Highlight feature
  {
    const s = deck.slides.add();
    s.background.fill = C.white;
    await addLogo(s);
    addText(s, "Highlight Features", { left: 72, top: 72, width: 520, height: 58 }, { size: 42, bold: true, color: C.forest, face: "Aptos Display" });
    addText(s, "ทุก feature ต้องช่วย retention, accountability หรือ group momentum", { left: 74, top: 140, width: 820, height: 44 }, { size: 24, color: C.muted });
    const features = [
      ["Fast check-in", "กดเสร็จในไม่กี่วินาที"],
      ["Group progress", "เห็นสถานะวันนี้ของทุกคน"],
      ["Encouragement", "reaction/ข้อความสั้นแบบ supportive"],
      ["Gentle streak", "ฉลอง consistency ไม่ลงโทษความพลาด"],
      ["Small group free", "ใช้ฟรีสำหรับกลุ่มไม่เกิน 5 คน"],
      ["Organizer tools", "dashboard, reminder, summary สำหรับกลุ่มใหญ่"],
    ];
    features.forEach(([h, b], i) => {
      const x = 74 + (i % 3) * 382;
      const y = 234 + Math.floor(i / 3) * 172;
      addRect(s, { left: x, top: y, width: 330, height: 122 }, { fill: i % 2 ? C.mint : C.cream, stroke: C.sand, radius: "rounded-xl" });
      addText(s, h, { left: x + 24, top: y + 24, width: 272, height: 30 }, { size: 24, bold: true, color: C.forest });
      addText(s, b, { left: x + 24, top: y + 66, width: 276, height: 40 }, { size: 18, color: C.muted });
    });
    footer(s, 5);
  }

  // 6. MVP Product
  {
    const s = deck.slides.add();
    s.background.fill = C.mint;
    await addLogo(s);
    addText(s, "MVP Product", { left: 72, top: 72, width: 460, height: 58 }, { size: 42, bold: true, color: C.forest, face: "Aptos Display" });
    addText(s, "เริ่มจาก use case แคบ: 21-Day Reading Challenge เพื่อพิสูจน์พฤติกรรมก่อนขยาย habit type", { left: 74, top: 142, width: 920, height: 70 }, { size: 27, bold: true });
    addRect(s, { left: 82, top: 282, width: 510, height: 232 }, { fill: C.white, stroke: C.sage, radius: "rounded-xl", shadow: "shadow-sm" });
    addText(s, "MVP scope", { left: 112, top: 314, width: 240, height: 34 }, { size: 26, bold: true, color: C.forest });
    bullet(s, "1 shared habit per group", 116, 370);
    bullet(s, "Daily check-in + group progress", 116, 416);
    bullet(s, "Simple encouragement", 116, 462);
    addRect(s, { left: 690, top: 282, width: 430, height: 232 }, { fill: C.forest, stroke: C.forest, radius: "rounded-xl" });
    addText(s, "Validation metrics", { left: 720, top: 314, width: 280, height: 34 }, { size: 26, bold: true, color: C.white });
    addText(s, "Day-7 retention\nDaily check-in rate\nEncouragement per group\nSecond challenge intent", { left: 724, top: 368, width: 330, height: 120 }, { size: 22, color: C.sage });
    footer(s, 6);
  }

  // 7. Why must be Tabbit
  {
    const s = deck.slides.add();
    s.background.fill = C.cream;
    await addLogo(s);
    addText(s, "Why Tabbit", { left: 72, top: 72, width: 420, height: 58 }, { size: 42, bold: true, color: C.forest, face: "Aptos Display" });
    addText(s, "เพราะปัญหาไม่ใช่การไม่มี tracker แต่คือการไม่มีแรงรับผิดชอบที่รู้สึกเป็นธรรมชาติ", { left: 74, top: 146, width: 900, height: 82 }, { size: 28, bold: true });
    addRect(s, { left: 94, top: 304, width: 310, height: 184 }, { fill: C.white, stroke: C.sand, radius: "rounded-xl" });
    addRect(s, { left: 486, top: 304, width: 310, height: 184 }, { fill: C.white, stroke: C.sand, radius: "rounded-xl" });
    addRect(s, { left: 878, top: 304, width: 310, height: 184 }, { fill: C.white, stroke: C.sand, radius: "rounded-xl" });
    addText(s, "LINE-first behavior", { left: 122, top: 340, width: 250, height: 32 }, { size: 24, bold: true, color: C.forest });
    addText(s, "เข้าใจบริบทกลุ่มไทยและการชวนเพื่อนผ่านแชท", { left: 122, top: 388, width: 238, height: 62 }, { size: 19, color: C.muted });
    addText(s, "Accountability first", { left: 514, top: 340, width: 250, height: 32 }, { size: 24, bold: true, color: C.forest });
    addText(s, "ไม่ได้เป็น habit tracker เดี่ยวที่ค่อยใส่ social feature ทีหลัง", { left: 514, top: 388, width: 238, height: 62 }, { size: 19, color: C.muted });
    addText(s, "Supportive, not shame", { left: 906, top: 340, width: 250, height: 32 }, { size: 24, bold: true, color: C.forest });
    addText(s, "เน้นกำลังใจและ consistency\nมากกว่าการจัดอันดับให้แพ้ชนะ", { left: 906, top: 388, width: 238, height: 72 }, { size: 18, color: C.muted });
    footer(s, 7);
  }

  // 8. Revenue Stream
  {
    const s = deck.slides.add();
    s.background.fill = C.forest;
    await addLogo(s, 1090, 42, 82, true);
    addText(s, "Revenue Stream", { left: 72, top: 72, width: 520, height: 58 }, { size: 42, bold: true, color: C.white, face: "Aptos Display" });
    addText(s, "Members join free. Organizers pay when coordination becomes valuable.", { left: 74, top: 142, width: 880, height: 56 }, { size: 28, bold: true, color: C.sage });
    const plans = [
      ["Free", "1 active group\nmax 5 people\n1 active challenge", "Adoption"],
      ["Plus", "multiple groups\nlonger history\nbetter reminders", "Power users"],
      ["Organizer Pro", "larger groups\ndashboard\nsummary / export", "Hosts & communities"],
    ];
    plans.forEach(([h, b, tag], i) => {
      const x = 96 + i * 382;
      addRect(s, { left: x, top: 286, width: 320, height: 248 }, { fill: C.white, stroke: C.sage, radius: "rounded-xl" });
      addText(s, h, { left: x + 26, top: 322, width: 220, height: 36 }, { size: 28, bold: true, color: C.forest });
      addText(s, b, { left: x + 26, top: 382, width: 238, height: 96 }, { size: 21, color: C.ink });
      pill(s, tag, x + 26, 486, i === 2 ? 210 : 160, i === 0 ? C.coral : C.forest, C.white, i === 2 ? 13 : 16);
    });
    addText(s, "Next ask: validate free small-group loop first, then test upgrade intent from organizers.", { left: 110, top: 592, width: 960, height: 38 }, { size: 22, bold: true, color: C.white, align: "center" });
    footer(s, 8, true);
  }

  for (const [i, slide] of deck.slides.items.entries()) {
    const stem = `slide-${String(i + 1).padStart(2, "0")}`;
    await writeBlob(path.join(PREVIEW, `${stem}.png`), await deck.export({ slide, format: "png", scale: 1 }));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(LAYOUT, `${stem}.layout.json`), await layout.text(), "utf8");
  }
  await writeBlob(path.join(PREVIEW, "montage.webp"), await deck.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(deck);
  await pptx.save(OUT);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
