var a = {
  a1: [
    'a', 'b', { v: 666 }
  ]
}

var b = [
  1, 3, 'a', {
    b2: {
      a: 1,
      v: 7,
      c: [{
        z: 666
      }]
    }
  }
]

var c = {
  a: {
    u: 1,
    d: {
      o: {
        z: { 1: 2, y: [1, 2] }
      },
      p: {
        yo: [3, 5, 666]
      }
    }
  }
}

var d = [
  [1, 3, 'abc'],
  [
    'muhaha',
    { d: 1, v: ['a', 'b', { z: 666 }] }
  ]
]

var e = {
  a: [3, {
    b: 1,
    v: [1, 3, {
      p: 666
    }]
  }, 9]
}


console.log(a.a1[2].v);  //a
console.log(b[3].b2.c[0].z); //b
console.log(c.a.d.p.yo[2]); //c 
console.log(d[1][1].v[2].z);  //d
console.log(e.a[1].v[2].p); //e