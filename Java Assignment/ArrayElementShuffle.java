// A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

public class ArrayElementShuffle {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the array
        shuffleArray(array);

        // Print the shuffled array
        System.out.print("Shuffled Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    private static void shuffleArray(int[] array) {
        int n = array.length;
        for (int i = n - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            int randIndex = (int) (Math.random() * (i + 1));

            // Swap array[i] and array[randIndex]
            int temp = array[i];
            array[i] = array[randIndex];
            array[randIndex] = temp;
        }
    }
}
