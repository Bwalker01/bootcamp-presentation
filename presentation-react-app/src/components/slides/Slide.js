export class Slide {
  constructor(name, image, keyPoints, description, speaker = "") {
    this.name = name;
    this.image = image;
    this.keyPoints = keyPoints;
    this.description = description;
    this.speaker = speaker;
  }
}
