import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ComboboxDemo } from "./combobox";

export function DialogDemo() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open Modal</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Test of popover component inside a dialog component.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<ComboboxDemo />
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
