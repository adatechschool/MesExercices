public class Delta extends Coronavirus {
    public Delta(String variant) {
        super(variant);
    }

    @Override
    public void affiche() {
        System.out.println("Variant Delta : " + variant);
    }
}