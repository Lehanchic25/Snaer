const coldWater = extend(Liquid, "cold-water", {});
const chilledWater = extend(Liquid, "chilled-water", {});
const methane = extend(Liquid, "methane", {});
const vanillaMethane = extend(Liquid, "vanilla-methane", {});
const snaerHydrogen = extend(Liquid, "snaer-hydrogen", {});
const hydroxide = extend(SnaerLiquid, "hydroxide", {});
const fluorine = extend(Liquid, "fluorine", {});
const hydrosulfide = extend(Liquid, "hydrosulfide", {});
const sulfuricAcid = extend(SnaerLiquid, "sulfuric-acid", {});
const caesium137 = extend(SnaerLiquid, "caesium-137", {});

module.exports = {
coldWater: coldWater,
chilledWater: chilledWater,
methane: methane,
vanillaMethane: vanillaMethane,
snaerHydrogen: snaerHydrogen,
hydroxide: hydroxide,
fluorine: fluorine,
hydrofluoricAcid: hydrofluoricAcid,
hydrosulfide: hydrosulfide,
sulfuricAcid: sulfuricAcid.
caesium137: caesium137
}
