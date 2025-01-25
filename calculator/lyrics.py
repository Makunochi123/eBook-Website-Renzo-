import time
import sys

def type_lyrics(lyrics, speeds=None, pauses=None):
    for line in lyrics.split('\n'):

        for char in line:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(0.1)
        print()

        if line == "I'll leave my heart with your air":
          print("Pausing for 3 seconds...")
          time.sleep(3)

if __name__ == "__main__":
    lyrics = """\
 You'd be mine 
 Would you mind 
 If i took your hand tonight?
 Know you're all that i want is life
 I'd imagine we fell in love
 I'll nap under moonlight skies with you
 I think i'll picture us you with the waves
 The oceans colors on your face
 I'll leave my heart with your air
 So let me fly with you
 Will you be forever with me?"""

    type_lyrics(lyrics)
    print("BRO WHAT THE HECK")