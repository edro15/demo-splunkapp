if (['major', 'minor', 'patch'].includes(process.env.bumpPart)) {
  console.log("Part to be bumped must be either 'major', 'minor' or 'patch'");
  process.exit(1);
}