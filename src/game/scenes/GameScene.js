import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.worldWidth = 2200;
    this.worldHeight = 1600;

    // =========================
    // QUEST SYSTEM
    // =========================

    this.quests = {
      "PROJECT LAB": false,
      "AI OBSERVATORY": false,
      "EXPERIENCE": false,
      "LIBRARY": false,
      "ACHIEVEMENT HALL": false,
    };

    this.questOrder = [
      "PROJECT LAB",
      "AI OBSERVATORY",
      "EXPERIENCE",
      "LIBRARY",
      "ACHIEVEMENT HALL",
    ];

    // =========================
    // WORLD
    // =========================

    this.add.rectangle(
      this.worldWidth / 2,
      this.worldHeight / 2,
      this.worldWidth,
      this.worldHeight,
      0x090511
    );

    this.add.rectangle(
      this.worldWidth / 2,
      this.worldHeight / 2,
      this.worldWidth - 100,
      this.worldHeight - 100,
      0x1b102d
    );

    this.createGroundPatch(
      400,
      650,
      520,
      420
    );

    this.createGroundPatch(
      1800,
      650,
      520,
      420
    );

    this.createGroundPatch(
      1100,
      350,
      500,
      260
    );

    this.createGroundPatch(
      1100,
      1050,
      500,
      260
    );

    this.createGroundPatch(1100, 1390, 520, 300);

    // =========================
    // STARS
    // =========================

    for (let i = 0; i < 160; i++) {
      const x = Phaser.Math.Between(
        70,
        this.worldWidth - 70
      );

      const y = Phaser.Math.Between(
        70,
        this.worldHeight - 70
      );

      const size =
        Phaser.Math.Between(1, 3);

      const star = this.add.circle(
        x,
        y,
        size,
        0xffffff,
        Phaser.Math.FloatBetween(
          0.25,
          0.9
        )
      );

      this.tweens.add({
        targets: star,
        alpha: Phaser.Math.FloatBetween(
          0.15,
          0.8
        ),
        duration: Phaser.Math.Between(
          1000,
          2800
        ),
        yoyo: true,
        repeat: -1,
      });
    }

    // =========================
    // ROADS
    // =========================

    this.add.rectangle(
      1100,
      700,
      2100,
      170,
      0x29183d
    );

    this.add.rectangle(
      1100,
      700,
      170,
      1300,
      0x29183d
    );

    this.add.rectangle(
      1100,
      700,
      2100,
      110,
      0x352052
    );

    this.add.rectangle(
      1100,
      700,
      110,
      1300,
      0x352052
    );

    for (
      let x = 100;
      x < 2100;
      x += 90
    ) {
      this.add.rectangle(
        x,
        700,
        45,
        3,
        0xc084fc,
        0.2
      );
    }

    for (
      let y = 100;
      y < 1300;
      y += 90
    ) {
      this.add.rectangle(
        1100,
        y,
        3,
        45,
        0xc084fc,
        0.2
      );
    }

    // =========================
    // CENTRAL PLAZA
    // =========================

    this.add.circle(
      1100,
      700,
      190,
      0x10091d
    );

    this.add.circle(
      1100,
      700,
      175,
      0x241337
    );

    this.add.circle(
      1100,
      700,
      130,
      0x2f1848
    );

    this.add.circle(
      1100,
      700,
      90,
      0x3d1d5c
    );

    this.add.circle(
      1100,
      700,
      55,
      0x12091d
    );

    this.createCrystal(
      1100,
      700
    );

    // =========================
    // TITLE
    // =========================

    this.add
      .text(
        1100,
        100,
        "SHAMAIL RASHA",
        {
          fontFamily: "monospace",
          fontSize: "42px",
          color: "#f5e9ff",
          stroke: "#0b0618",
          strokeThickness: 6,
        }
      )
      .setOrigin(0.5);

    this.add
      .text(
        1100,
        150,
        "THE DEVELOPER QUEST",
        {
          fontFamily: "monospace",
          fontSize: "16px",
          color: "#c084fc",
          stroke: "#0b0618",
          strokeThickness: 4,
        }
      )
      .setOrigin(0.5);

    // =========================
    // BUILDINGS
    // =========================

    this.createBuilding(
      500,
      380,
      360,
      220,
      "PROJECT LAB",
      "Projects & creations",
      0x7c3aed
    );

    this.createBuilding(
      1700,
      380,
      360,
      220,
      "AI OBSERVATORY",
      "AI • ML • IoT",
      0x9333ea
    );

    this.createBuilding(
      500,
      1050,
      360,
      220,
      "EXPERIENCE",
      "My developer journey",
      0xa855f7
    );

    this.createBuilding(
      1700,
      1050,
      360,
      220,
      "LIBRARY",
      "Skills • Education",
      0x6d28d9
    );

    this.createBuilding(
      1100,
      1390,
      390,
      220,
      "ACHIEVEMENT HALL",
      "Awards • Leadership • Research",
      0xb45309
    );

    // Interactive building halos + discovery badges
    this.buildingFX = {};
    [
      [500, 380, "PROJECT LAB"],
      [1700, 380, "AI OBSERVATORY"],
      [500, 1050, "EXPERIENCE"],
      [1700, 1050, "LIBRARY"],
      [1100, 1390, "ACHIEVEMENT HALL"],
    ].forEach(([bx, by, name]) => {
      const halo = this.add.rectangle(bx, by, 390, 250, 0xc084fc, 0)
        .setStrokeStyle(3, 0xd8b4fe, 0)
        .setDepth(8);
      const badge = this.add.text(bx + 155, by - 98, "✓", {
        fontFamily: "monospace", fontSize: "20px", color: "#ffffff",
        backgroundColor: "#6d28d9", padding: { left: 7, right: 7, top: 3, bottom: 3 }
      }).setOrigin(0.5).setDepth(30).setVisible(false);
      this.buildingFX[name] = { halo, badge };
    });

    // =========================
    // ENVIRONMENT
    // =========================

    this.createTree(180, 250);
    this.createTree(2050, 250);
    this.createTree(180, 1200);
    this.createTree(2050, 1200);

    this.createTree(850, 300);
    this.createTree(1350, 300);
    this.createTree(850, 1100);
    this.createTree(1350, 1100);

    this.createTree(950, 1480);
    this.createTree(1250, 1480);

    this.createTree(300, 700);
    this.createTree(1900, 700);

    this.createFlower(300, 430);
    this.createFlower(390, 470);
    this.createFlower(1820, 450);
    this.createFlower(1910, 470);
    this.createFlower(300, 980);
    this.createFlower(390, 940);
    this.createFlower(1820, 980);
    this.createFlower(1910, 940);

    // =========================
    // LAMPS
    // =========================

    this.createLamp(800, 650);
    this.createLamp(1400, 650);
    this.createLamp(1100, 450);
    this.createLamp(1100, 950);

    this.createLamp(350, 700);
    this.createLamp(1850, 700);

    // =========================
    // GUIDE
    // =========================

    this.guide = this.createGuide(
      1100,
      560
    );

    this.guideLabel =
      this.add.text(
        1100,
        505,
        "✦ GUIDE",
        {
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#d8b4fe",
          backgroundColor: "#160b29",
          padding: {
            left: 8,
            right: 8,
            top: 5,
            bottom: 5,
          },
        }
      )
      .setOrigin(0.5);

    this.guidePrompt =
      this.add.text(
        1100,
        485,
        this.sys.game.device.input.touch ? "TAP INTERACT TO TALK" : "PRESS E TO TALK",
        {
          fontFamily: "monospace",
          fontSize: "12px",
          color: "#ffffff",
          backgroundColor: "#6d28d9",
          padding: {
            left: 10,
            right: 10,
            top: 7,
            bottom: 7,
          },
        }
      )
      .setOrigin(0.5)
      .setVisible(false)
      .setDepth(100);

    // =========================
    // PLAYER
    // =========================

    this.player = this.createPlayer(
      1100,
      700
    );

    // =========================
    // CONTROLS
    // =========================

    this.cursors =
      this.input.keyboard.createCursorKeys();

    this.keys =
      this.input.keyboard.addKeys({
        W: Phaser.Input.Keyboard.KeyCodes.W,
        A: Phaser.Input.Keyboard.KeyCodes.A,
        S: Phaser.Input.Keyboard.KeyCodes.S,
        D: Phaser.Input.Keyboard.KeyCodes.D,
        E: Phaser.Input.Keyboard.KeyCodes.E,
      });

    // Touch controls are driven by the React mobile overlay.
    this.mobileMove = { up: false, down: false, left: false, right: false };
    this.mobileInteractQueued = false;

    this.handleMobileControl = (event) => {
      const { control, active } = event.detail || {};
      if (Object.prototype.hasOwnProperty.call(this.mobileMove, control)) {
        this.mobileMove[control] = Boolean(active);
      }
    };

    this.handleMobileInteract = () => {
      this.mobileInteractQueued = true;
    };

    window.addEventListener("portfolio:mobileControl", this.handleMobileControl);
    window.addEventListener("portfolio:mobileInteract", this.handleMobileInteract);

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      window.removeEventListener("portfolio:mobileControl", this.handleMobileControl);
      window.removeEventListener("portfolio:mobileInteract", this.handleMobileInteract);
    });

    // =========================
    // CAMERA
    // =========================

    this.cameras.main.setBounds(
      0,
      0,
      this.worldWidth,
      this.worldHeight
    );

    this.cameras.main.startFollow(
      this.player,
      true,
      0.08,
      0.08
    );

    // =========================
    // BUILDING INTERACTION
    // =========================

    this.interactionText =
      this.add.text(
        0,
        0,
        this.sys.game.device.input.touch ? "TAP INTERACT TO EXPLORE" : "PRESS E TO EXPLORE",
        {
          fontFamily: "monospace",
          fontSize: "16px",
          color: "#ffffff",
          backgroundColor: "#6d28d9",
          padding: {
            left: 12,
            right: 12,
            top: 8,
            bottom: 8,
          },
        }
      );

    this.interactionText
      .setOrigin(0.5)
      .setVisible(false)
      .setDepth(100);

    this.corePrompt = this.add.text(1100, 610, this.sys.game.device.input.touch ? "INTERACT  •  ENTER DEVELOPER CORE" : "E  •  ENTER DEVELOPER CORE", {
      fontFamily: "monospace", fontSize: "14px", color: "#ffffff",
      backgroundColor: "#5b21b6", padding: { left: 13, right: 13, top: 8, bottom: 8 }
    }).setOrigin(0.5).setDepth(120).setVisible(false);

    // =========================
    // QUEST LOG
    // =========================

    this.questTitle =
      this.add.text(
        25,
        115,
        "DISCOVERY LOG",
        {
          fontFamily: "monospace",
          fontSize: "13px",
          color: "#c084fc",
          letterSpacing: 2,
        }
      );

    this.questList =
      this.add.text(
        25,
        140,
        "",
        {
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#ddd6fe",
          lineSpacing: 7,
        }
      );

    this.questTitle
      .setScrollFactor(0)
      .setDepth(100);

    this.questList
      .setScrollFactor(0)
      .setDepth(100);

    this.updateQuestLog();

    // =========================
    // FIXED UI
    // =========================

    this.ui = this.add.text(
      25,
      25,
      this.sys.game.device.input.touch
        ? "TOUCH CONTROLS  •  MOVE + INTERACT"
        : "WASD / ARROWS  •  MOVE\nE  •  INTERACT",
      {
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#f5e9ff",
        backgroundColor: "#160b29",
        padding: 12,
      }
    );

    this.ui
      .setScrollFactor(0)
      .setDepth(100);
  }

  // =========================
  // GROUND
  // =========================

  createGroundPatch(
    x,
    y,
    width,
    height
  ) {
    this.add.ellipse(
      x,
      y,
      width,
      height,
      0x26163a,
      0.55
    );

    this.add.ellipse(
      x,
      y,
      width - 60,
      height - 60,
      0x2d1945,
      0.35
    );
  }

  // =========================
  // BUILDING
  // =========================

  createBuilding(
    x,
    y,
    width,
    height,
    title,
    subtitle,
    color
  ) {
    this.add.rectangle(
      x,
      y,
      width + 50,
      height + 50,
      color,
      0.12
    );

    this.add.rectangle(
      x + 18,
      y + 22,
      width,
      height,
      0x050208
    );

    this.add.rectangle(
      x,
      y,
      width,
      height,
      color
    );

    this.add.rectangle(
      x,
      y + 5,
      width - 18,
      height - 18,
      0x32145e
    );

    this.add.rectangle(
      x,
      y - height / 2 + 18,
      width - 20,
      38,
      color
    );

    this.add.rectangle(
      x,
      y - height / 2 + 5,
      width - 50,
      5,
      0xd8b4fe,
      0.55
    );

    this.add.rectangle(
      x,
      y + 65,
      70,
      105,
      0x0c0614
    );

    this.add.rectangle(
      x,
      y + 65,
      52,
      87,
      0xa855f7,
      0.22
    );

    this.add.circle(
      x + 20,
      y + 65,
      4,
      0xf5d0fe
    );

    this.createWindow(
      x - 110,
      y + 10
    );

    this.createWindow(
      x + 110,
      y + 10
    );

    this.add.rectangle(
      x,
      y - 68,
      width - 80,
      48,
      0x100719
    );

    this.add.rectangle(
      x,
      y - 68,
      width - 90,
      38,
      color
    );

    this.add
      .text(
        x,
        y - 68,
        title,
        {
          fontFamily: "monospace",
          fontSize: "21px",
          color: "#ffffff",
          stroke: "#180b28",
          strokeThickness: 4,
        }
      )
      .setOrigin(0.5);

    this.add
      .text(
        x,
        y - 20,
        subtitle,
        {
          fontFamily: "Arial",
          fontSize: "14px",
          color: "#eee5ff",
        }
      )
      .setOrigin(0.5);

    this.add.circle(
      x - 45,
      y + 15,
      5,
      0xf5d0fe
    );

    this.add.circle(
      x + 45,
      y + 15,
      5,
      0xf5d0fe
    );
  }

  // =========================
  // WINDOW
  // =========================

  createWindow(x, y) {
    this.add.rectangle(
      x,
      y,
      62,
      62,
      0x0b0615
    );

    const glow =
      this.add.rectangle(
        x,
        y,
        48,
        48,
        0xd8b4fe,
        0.3
      );

    this.tweens.add({
      targets: glow,
      alpha: 0.12,
      duration: 1800,
      yoyo: true,
      repeat: -1,
    });

    this.add.rectangle(
      x,
      y,
      3,
      48,
      0x160b29
    );

    this.add.rectangle(
      x,
      y,
      48,
      3,
      0x160b29
    );
  }

  // =========================
  // TREE
  // =========================

  createTree(x, y) {
    this.add.ellipse(
      x,
      y + 70,
      90,
      28,
      0x09050f,
      0.5
    );

    this.add.rectangle(
      x,
      y + 35,
      22,
      75,
      0x3b1d32
    );

    this.add.circle(
      x,
      y,
      48,
      0x581c87
    );

    this.add.circle(
      x - 32,
      y + 18,
      32,
      0x6b21a8
    );

    this.add.circle(
      x + 32,
      y + 18,
      32,
      0x7e22ce
    );

    this.add.circle(
      x,
      y - 25,
      25,
      0x9333ea
    );
  }

  // =========================
  // FLOWER
  // =========================

  createFlower(x, y) {
    this.add.rectangle(
      x,
      y + 12,
      3,
      25,
      0x4d7c0f
    );

    this.add.circle(
      x - 7,
      y,
      7,
      0xc084fc
    );

    this.add.circle(
      x + 7,
      y,
      7,
      0xd8b4fe
    );

    this.add.circle(
      x,
      y - 7,
      7,
      0xa855f7
    );

    this.add.circle(
      x,
      y,
      4,
      0xfef3c7
    );
  }

  // =========================
  // LAMP
  // =========================

  createLamp(x, y) {
    this.add.rectangle(
      x,
      y + 40,
      8,
      80,
      0x24152f
    );

    this.add.rectangle(
      x,
      y + 5,
      22,
      8,
      0x3b2448
    );

    const glow =
      this.add.circle(
        x,
        y,
        55,
        0xd8b4fe,
        0.1
      );

    this.add.circle(
      x,
      y,
      11,
      0xf5d0fe
    );

    this.tweens.add({
      targets: glow,
      alpha: 0.035,
      duration: 1500,
      yoyo: true,
      repeat: -1,
    });
  }

  // =========================
  // CRYSTAL
  // =========================

  createCrystal(x, y) {
    const glow =
      this.add.circle(
        x,
        y,
        65,
        0xc084fc,
        0.08
      );

    this.tweens.add({
      targets: glow,
      scale: 1.2,
      alpha: 0.03,
      duration: 1800,
      yoyo: true,
      repeat: -1,
    });

    const crystal =
      this.add.polygon(
        x,
        y,
        [
          0, -40,
          28, -10,
          18, 35,
          0, 48,
          -18, 35,
          -28, -10,
        ],
        0xc084fc
      );

    this.tweens.add({
      targets: crystal,
      angle: 360,
      duration: 9000,
      repeat: -1,
    });
  }

  // =========================
  // GUIDE
  // =========================

  createGuide(x, y) {
    const guide =
      this.add.container(x, y);

    const glow =
      this.add.circle(
        0,
        0,
        50,
        0xd8b4fe,
        0.08
      );

    guide.add(glow);

    guide.add(
      this.add.ellipse(
        0,
        28,
        40,
        12,
        0x000000,
        0.35
      )
    );

    guide.add(
      this.add.rectangle(
        0,
        10,
        30,
        40,
        0x9333ea
      )
    );

    guide.add(
      this.add.circle(
        0,
        -17,
        17,
        0xf3c6a5
      )
    );

    guide.add(
      this.add.arc(
        0,
        -21,
        18,
        180,
        360,
        false,
        0x13091e
      )
    );

    guide.add(
      this.add.circle(
        0,
        5,
        5,
        0xd8b4fe
      )
    );

    this.tweens.add({
      targets: guide,
      y: y - 8,
      duration: 1300,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    return guide;
  }

  // =========================
  // PLAYER
  // =========================

  createPlayer(x, y) {
    const player = this.add.container(x, y).setDepth(40);

    player.add(this.add.ellipse(0, 29, 42, 12, 0x000000, 0.38));
    const glow = this.add.circle(0, 0, 47, 0xc084fc, 0.07);
    player.add(glow);

    // legs
    player.add(this.add.rectangle(-7, 24, 7, 17, 0x1b102d));
    player.add(this.add.rectangle(7, 24, 7, 17, 0x1b102d));
    // jacket/body
    player.add(this.add.rectangle(0, 7, 32, 38, 0x9333ea));
    player.add(this.add.rectangle(0, 4, 8, 34, 0xd8b4fe, 0.65));
    // arms
    player.add(this.add.rectangle(-20, 7, 7, 28, 0x7c3aed));
    player.add(this.add.rectangle(20, 7, 7, 28, 0x7c3aed));
    // head + hair
    player.add(this.add.circle(0, -20, 17, 0xf5c7a9));
    player.add(this.add.arc(0, -24, 18, 180, 360, false, 0x24102f));
    player.add(this.add.circle(-6, -20, 1.5, 0x24102f));
    player.add(this.add.circle(6, -20, 1.5, 0x24102f));
    // tiny developer badge
    player.add(this.add.text(0, 6, "<>", { fontFamily: "monospace", fontSize: "8px", color: "#ffffff" }).setOrigin(0.5));

    player.glow = glow;
    return player;
  }

  // =========================
  // QUEST LOG
  // =========================

  updateQuestLog() {
    let completed = 0;

    const lines =
      this.questOrder.map(
        (quest) => {
          const done =
            this.quests[quest];

          if (done) {
            completed++;
          }

          return `${done ? "✓" : "○"} ${quest}`;
        }
      );

    this.questList.setText(
      lines.join("\n")
    );

    if (
      completed ===
      this.questOrder.length
    ) {
      this.questList.setText(
        lines.join("\n") +
        "\n\n✦ FULL JOURNEY DISCOVERED ✦"
      );

      this.showQuestComplete();
    }
  }

  // =========================
  // QUEST COMPLETE
  // =========================

  showQuestComplete() {
    if (this.questCompleteShown) {
      return;
    }

    this.questCompleteShown = true;
    this.coreUnlocked = true;

    this.coreRing = this.add.circle(1100, 700, 105, 0x000000, 0)
      .setStrokeStyle(5, 0xd8b4fe, 0.75).setDepth(75);
    this.tweens.add({ targets: this.coreRing, scale: 1.12, alpha: 0.45, duration: 1300, yoyo: true, repeat: -1 });
    this.coreLabel = this.add.text(1100, 810, "DEVELOPER CORE • ONLINE", {
      fontFamily: "monospace", fontSize: "12px", color: "#f5d0fe",
      backgroundColor: "#160b29", padding: { left: 10, right: 10, top: 5, bottom: 5 }
    }).setOrigin(0.5).setDepth(85);

    const coreGlow = this.add.circle(
      1100,
      700,
      120,
      0xf5d0fe,
      0.18
    ).setDepth(80);

    const message = this.add.text(
      1100,
      590,
      "✦ DEVELOPER CORE UNLOCKED ✦\n\nYOU EXPLORED THE FULL JOURNEY\nECE → AI / IoT → FULL STACK DEVELOPMENT",
      {
        fontFamily: "monospace",
        fontSize: "20px",
        align: "center",
        color: "#ffffff",
        backgroundColor: "#35115f",
        padding: { left: 24, right: 24, top: 18, bottom: 18 },
        lineSpacing: 8,
      }
    ).setOrigin(0.5).setDepth(90);

    this.tweens.add({
      targets: coreGlow,
      scale: 1.5,
      alpha: 0,
      duration: 2200,
      repeat: 1,
      yoyo: true,
    });

    this.tweens.add({
      targets: message,
      alpha: 0,
      y: 550,
      duration: 1200,
      delay: 4500,
      ease: "Power2",
      onComplete: () => message.destroy(),
    });
  }

  // =========================
  // GUIDE DIALOGUE
  // =========================

  showGuideDialogue() {
    if (this.dialogueOpen) {
      return;
    }

    this.dialogueOpen = true;

    this.dialogueBox =
      this.add.container(
        this.scale.width / 2,
        this.scale.height / 2
      );

    const box =
      this.add.rectangle(
        0,
        0,
        Math.min(700, this.scale.width - 32),
        this.scale.width < 760 ? 330 : 230,
        0x100719,
        0.97
      );

    box.setStrokeStyle(
      2,
      0xc084fc,
      0.8
    );

    this.dialogueBox.add(box);

    const title =
      this.add.text(
        -Math.min(315, (this.scale.width - 72) / 2),
        this.scale.width < 760 ? -140 : -90,
        "✦ THE GUIDE",
        {
          fontFamily: "monospace",
          fontSize: "14px",
          color: "#c084fc",
          letterSpacing: 2,
        }
      );

    this.dialogueBox.add(title);

    const text =
      this.add.text(
        -Math.min(315, (this.scale.width - 72) / 2),
        this.scale.width < 760 ? -105 : -55,
        "Welcome to Shamail Rasha's developer world.\n\n" +
        "Explore five districts to discover projects, AI/IoT research,\n" +
        "experience, skills, education and achievements.\n\n" +
        "Short on time? Use Fast Travel in the top-right dock.\n" +
        "Discover all five districts to activate the Developer Core.",
        {
          fontFamily: "Arial",
          fontSize: "15px",
          color: "#ddd6fe",
          lineSpacing: 5,
          wordWrap: { width: Math.min(630, this.scale.width - 72), useAdvancedWrap: true },
        }
      );

    this.dialogueBox.add(text);

    const close =
      this.add.text(
        Math.min(315, (this.scale.width - 72) / 2),
        this.scale.width < 760 ? 140 : 90,
        this.sys.game.device.input.touch ? "[ TAP INTERACT TO CLOSE ]" : "[ PRESS E TO CLOSE ]",
        {
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#a78bfa",
        }
      )
      .setOrigin(1, 0);

    this.dialogueBox.add(close);

    this.dialogueBox
      .setScrollFactor(0)
      .setDepth(200);
  }

  closeGuideDialogue() {
    if (!this.dialogueOpen) {
      return;
    }

    this.dialogueOpen = false;

    if (this.dialogueBox) {
      this.dialogueBox.destroy();
      this.dialogueBox = null;
    }
  }

  // =========================
  // INPUT HELPERS
  // =========================

  consumeInteract() {
    const keyboardInteract = Phaser.Input.Keyboard.JustDown(this.keys.E);
    const mobileInteract = this.mobileInteractQueued;
    this.mobileInteractQueued = false;
    return keyboardInteract || mobileInteract;
  }

  // =========================
  // UPDATE
  // =========================

  update() {
    const interactPressed = this.consumeInteract();

    if (this.dialogueOpen) {
      if (interactPressed) {
        this.closeGuideDialogue();
      }

      return;
    }

    const speed = 5;
    let moving = false;

    if (
      this.cursors.left.isDown ||
      this.keys.A.isDown ||
      this.mobileMove.left
    ) {
      this.player.x -= speed;
      moving = true;
      this.player.scaleX = -1;
    }

    if (
      this.cursors.right.isDown ||
      this.keys.D.isDown ||
      this.mobileMove.right
    ) {
      this.player.x += speed;
      moving = true;
      this.player.scaleX = 1;
    }

    if (
      this.cursors.up.isDown ||
      this.keys.W.isDown ||
      this.mobileMove.up
    ) {
      this.player.y -= speed;
      moving = true;
    }

    if (
      this.cursors.down.isDown ||
      this.keys.S.isDown ||
      this.mobileMove.down
    ) {
      this.player.y += speed;
      moving = true;
    }

    this.player.x =
      Phaser.Math.Clamp(
        this.player.x,
        100,
        this.worldWidth - 100
      );

    this.player.y =
      Phaser.Math.Clamp(
        this.player.y,
        100,
        this.worldHeight - 100
      );

    this.player.rotation = moving ? Math.sin(this.time.now / 90) * 0.035 : 0;
    if (this.player.glow) this.player.glow.setAlpha(moving ? 0.12 : 0.07);

    // Developer Core interaction after all five areas are discovered
    const coreDistance = Phaser.Math.Distance.Between(this.player.x, this.player.y, 1100, 700);
    if (this.coreUnlocked && coreDistance < 135) {
      this.corePrompt.setVisible(true);
      if (interactPressed) {
        window.dispatchEvent(new CustomEvent("portfolio:openDeveloperCore"));
        return;
      }
    } else {
      this.corePrompt.setVisible(false);
    }

    // =========================
    // GUIDE DETECTION
    // =========================

    const guideDistance =
      Phaser.Math.Distance.Between(
        this.player.x,
        this.player.y,
        this.guide.x,
        this.guide.y
      );

    if (guideDistance < 150) {
      this.guidePrompt
        .setVisible(true);

      this.guidePrompt.setPosition(
        this.guide.x,
        this.guide.y - 65
      );

      if (interactPressed) {
        this.showGuideDialogue();
        return;
      }
    } else {
      this.guidePrompt
        .setVisible(false);
    }

    // =========================
    // BUILDING DETECTION
    // =========================

    const buildings = [
      {
        x: 500,
        y: 380,
        name: "PROJECT LAB",
      },
      {
        x: 1700,
        y: 380,
        name: "AI OBSERVATORY",
      },
      {
        x: 500,
        y: 1050,
        name: "EXPERIENCE",
      },
      {
        x: 1700,
        y: 1050,
        name: "LIBRARY",
      },
      {
        x: 1100,
        y: 1390,
        name: "ACHIEVEMENT HALL",
      },
    ];

    let nearest = null;
    let nearestDistance = 150;

    buildings.forEach(
      (building) => {
        const distance =
          Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            building.x,
            building.y
          );

        if (
          distance <
          nearestDistance
        ) {
          nearest = building;
          nearestDistance = distance;
        }
      }
    );

    Object.entries(this.buildingFX).forEach(([name, fx]) => {
      const active = nearest && nearest.name === name;
      fx.halo.setFillStyle(0xc084fc, active ? 0.10 : 0);
      fx.halo.setStrokeStyle(3, 0xd8b4fe, active ? 0.72 : 0);
      fx.badge.setVisible(Boolean(this.quests[name]));
    });

    if (nearest) {
      this.interactionText
        .setVisible(true);

      this.interactionText.setPosition(
        this.player.x,
        this.player.y - 75
      );

      if (interactPressed) {
        if (
          !this.quests[
            nearest.name
          ]
        ) {
          this.quests[
            nearest.name
          ] = true;

          this.updateQuestLog();
        }

        if (
          nearest.name ===
          "PROJECT LAB"
        ) {
          window.dispatchEvent(
            new CustomEvent(
              "portfolio:openProjectLab"
            )
          );
        }

        if (
          nearest.name ===
          "AI OBSERVATORY"
        ) {
          window.dispatchEvent(
            new CustomEvent(
              "portfolio:openAIObservatory"
            )
          );
        }

        if (
          nearest.name ===
          "EXPERIENCE"
        ) {
          window.dispatchEvent(
            new CustomEvent(
              "portfolio:openExperience"
            )
          );
        }

        if (
          nearest.name ===
          "LIBRARY"
        ) {
          window.dispatchEvent(
            new CustomEvent(
              "portfolio:openLibrary"
            )
          );
        }

        if (
          nearest.name ===
          "ACHIEVEMENT HALL"
        ) {
          window.dispatchEvent(
            new CustomEvent(
              "portfolio:openAchievementHall"
            )
          );
        }
      }
    } else {
      this.interactionText
        .setVisible(false);
    }
  }
}