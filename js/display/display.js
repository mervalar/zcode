async function display() {
  const response = await fetch("https://getbible.net/json?passage=Genesis1");
  try {
    if (!response.ok) {
      throw new Error("couldn't connect");
    }

    const data = await response.json();
    console.log("data");
  } catch (error) {
    console.error(error);
  }
}
display();
