function cat_mouse(str, max_jump) {
    let has_animals = /(c|m|d)/i.test(str);
    if (!has_animals) {
      console.log('boring without all three');
    } else {
      let str_lower = str.toLowerCase();
      let cat_position = str_lower.indexOf('c');
      let dog_position = str_lower.indexOf('d');
      let mouse_position = str_lower.indexOf('m');
      let min = Math.min(cat_position, mouse_position);
      let max = Math.max(cat_position, mouse_position);
  
      // is the dog between the cat and mouse
      if (min < dog_position && dog_position < max) {
        console.log('Protected!');
      } else {
        let distance = Math.abs(cat_position - mouse_position);
        if (distance > max_jump) {
          console.log('Escaped!');
        } else {
          console.log('Caught!');
        }
      }
  
    }
  }
  
  
  // ----- test 
  
  cat_mouse('..j.....h.', 5);
  cat_mouse('..c.....m.', 5);
  cat_mouse('..c....m.', 5);
  cat_mouse('d..m.......c.', 10);
  cat_mouse('d..m.......c.', 5);
  cat_mouse('..m....d...c.', 5);
  cat_mouse('...m.........C...D', 10);