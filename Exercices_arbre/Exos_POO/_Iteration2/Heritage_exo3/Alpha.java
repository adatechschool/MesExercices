
public class Alpha extends Coronavirus {
    public Alpha(String variant) {
        super(variant);
    }

    @Override
    public void affiche() {
        System.out.println("Variant Alpha : " + variant);
    }
}
