function generateSlug(title) {
    const slug = title.replace(/ /g, '-');
  
    return slug.toLowerCase();
  }
  const title = 'AlmaBetter Web Dev';
  const slug = generateSlug(title);
  console.log(slug);
   // Output: almabetter-web-dev
    