import { Button } from "@/components/ui/button"


function loading() {
    return (
        <div className=" flex justify-center items-center mt-80">
            <Button type="Button" disabled>

                Processing...
            </Button>
        </div>

    )
}

export default loading
