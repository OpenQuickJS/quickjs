use std::env;
use std::path::PathBuf;
use std::process::Command;

fn main() {
    env::set_var("RUST_BACKTRACE", "1");
    let current_dir = env::current_dir().unwrap();
    let working_dir = current_dir.parent().unwrap();

    let home_dir = env::var("HOME").expect("HOME environment variable not found.");
    let cbindgen_bin_path = PathBuf::from(&home_dir).join(".cargo/bin/cbindgen");

    let output = Command::new(cbindgen_bin_path)
        .current_dir(&working_dir)
        .arg("--config")
        .arg("cbindgen.toml")
        .arg("--crate")
        .arg("quickjs") 
        .arg("--lang")
        .arg("c")
        .arg("--output")
        .arg("include/quickjs-rs.h")
        .output()
        .expect("Failed to execute command.");

    println!("{}", String::from_utf8_lossy(&output.stdout));
    eprintln!("{}", String::from_utf8_lossy(&output.stderr));
}
