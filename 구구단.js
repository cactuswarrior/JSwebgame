for (let i=2; i < 10; i++) {
  if (i%2 === 0) continue;
  for (let j=2; j < 10; j++) {
      if (j%2 === 0) continue
      console.log(i,"\*", j, "\=", i*j)}
}
