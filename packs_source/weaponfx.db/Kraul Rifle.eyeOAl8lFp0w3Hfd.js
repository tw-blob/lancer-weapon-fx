let target = Array.from(game.user.targets)[0];

let sequence = new Sequence()
    .sound()
    .file("modules/lancer-weapon-fx/soundfx/AMR_Fire.ogg")
    .volume(0.5 * game.settings.get("lancer-weapon-fx", "volume"))
    .effect()
    .file("jb2a.bullet.Snipe.blue")
    .tint("#9d9595")
    .atLocation(canvas.tokens.controlled[0] ?? game.combat?.current?.tokenId)
    .stretchTo(target)
    .waitUntilFinished(-1200)
    .effect()
    .file("jb2a.impact.orange.0")
    .atLocation(target)
    .rotateTowards(canvas.tokens.controlled[0] ?? game.combat?.current?.tokenId)
    .rotate(230)
    .center()
    .sound()
    .file("modules/lancer-weapon-fx/soundfx/AMR_Impact.ogg")
    .volume(0.5 * game.settings.get("lancer-weapon-fx", "volume"))
    .play();
